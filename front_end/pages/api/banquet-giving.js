import crypto from 'crypto';
import stripePackage from 'stripe';
import {
   CAMPAIGN,
   FUNDS,
   MAX_CENTS,
   MIN_CENTS,
   formatCents,
   fundName,
   giftSummary,
   matchMonthlyCents,
   toCents,
} from '../../tools/banquetGiving';

const stripe = stripePackage(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

const SITE_URL = 'https://byelorussianmission.org';
const ALLOWED_HOSTS = /^(localhost(:\d+)?|byelorussianmission\.org|(www\.)?belarusmission\.org)$/;
// sha256 of the staff report passcode. The passcode itself is not stored anywhere in the code.
const REPORT_KEY_HASH = '8279049ed395c438148dc82abc5f5ac458cbff4d751bc551719cde095464c991';
const PORTAL_TAG = 'banquet-giving';

// Send the guest back to the same site they came from (either domain, or localhost in testing).
const originOf = (req) => {
   const host = req.headers['x-forwarded-host'] || req.headers.host || '';
   if (!ALLOWED_HOSTS.test(host)) return SITE_URL;
   return `${host.startsWith('localhost') ? 'http' : 'https'}://${host}`;
};

// One product per fund and kind, with fixed ids, so the Stripe catalog doesn't
// collect a new product for every gift.
const productId = (kind, fund) => `bmi_banquet26_${kind}_${fund}`;
const productName = (kind, fund) =>
   `${kind === 'monthly' ? 'Monthly gift' : 'One-time gift'} · ${fundName(fund)} (${CAMPAIGN})`;

const ensureProducts = async (fund) => {
   for (const kind of ['once', 'monthly']) {
      try {
         await stripe.products.create({ id: productId(kind, fund), name: productName(kind, fund) });
      } catch (e) {
         if (e.code !== 'resource_already_exists') throw e;
      }
   }
};

const createSession = async (req, res) => {
   const { fund, monthlyKind } = req.body || {};
   if (!FUNDS.some((item) => item.key === fund)) {
      return res.status(400).json({ error: { message: 'Please choose a fund.' } });
   }

   const giftCents = toCents(req.body.gift);
   const monthlyCents = monthlyKind === 'match' ? matchMonthlyCents(giftCents) : toCents(req.body.monthly);
   if (!giftCents && !monthlyCents) {
      return res.status(400).json({ error: { message: 'Please choose a gift amount.' } });
   }
   for (const cents of [giftCents, monthlyCents]) {
      if (cents && (cents < MIN_CENTS || cents > MAX_CENTS)) {
         return res
            .status(400)
            .json({ error: { message: `Amounts must be between ${formatCents(MIN_CENTS)} and ${formatCents(MAX_CENTS)}.` } });
      }
   }

   const summary = giftSummary({ giftCents, monthlyCents, fund });
   const metadata = {
      campaign: CAMPAIGN,
      fund: fundName(fund),
      one_time: (giftCents / 100).toFixed(2),
      monthly: (monthlyCents / 100).toFixed(2),
      monthly_choice: monthlyCents ? monthlyKind || 'custom' : 'none',
   };
   const origin = originOf(req);

   const lineItems = [];
   if (monthlyCents) {
      lineItems.push({
         quantity: 1,
         price_data: {
            currency: 'usd',
            unit_amount: monthlyCents,
            recurring: { interval: 'month' },
            product: productId('monthly', fund),
         },
      });
   }
   if (giftCents) {
      lineItems.push({
         quantity: 1,
         price_data: { currency: 'usd', unit_amount: giftCents, product: productId('once', fund) },
      });
   }

   const params = {
      mode: monthlyCents ? 'subscription' : 'payment',
      line_items: lineItems,
      // Cards, plus Apple Pay and Google Pay, which Stripe offers under "card".
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      phone_number_collection: { enabled: true },
      metadata,
      custom_text: {
         submit: {
            message: summary.map((line) => `**${line.label}:** ${line.value}`).join('  ·  '),
         },
      },
      success_url: `${origin}/give/thanks?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/give`,
   };

   if (monthlyCents) {
      // The one-time gift, if any, is charged with the first monthly gift on the same receipt.
      params.subscription_data = { description: `${CAMPAIGN} monthly gift · ${fundName(fund)}`, metadata };
   } else {
      params.submit_type = 'donate';
      params.customer_creation = 'always';
      params.payment_intent_data = { description: `${CAMPAIGN} gift · ${fundName(fund)}`, metadata };
      // Gives one-time gifts the same emailed receipt document as monthly gifts. The tax
      // wording on every receipt is Stripe's default invoice footer (Settings > Invoice template).
      params.invoice_creation = { enabled: true, invoice_data: { metadata } };
   }

   let session;
   try {
      session = await stripe.checkout.sessions.create(params);
   } catch (e) {
      // First gift to this fund: its products don't exist yet.
      if (e.code !== 'resource_missing') throw e;
      await ensureProducts(fund);
      session = await stripe.checkout.sessions.create(params);
   }
   return res.json({ url: session.url });
};

// What the thank-you page shows. The session id in the link is the only key.
const sessionSummary = async (req, res) => {
   const id = String(req.query.session_id || '');
   if (!/^cs_(test|live)_[A-Za-z0-9]+$/.test(id)) {
      return res.status(400).json({ error: { message: 'Unknown gift.' } });
   }
   const session = await stripe.checkout.sessions.retrieve(id);
   if (session.metadata?.campaign !== CAMPAIGN) {
      return res.status(404).json({ error: { message: 'Unknown gift.' } });
   }
   return res.json({
      paid: session.payment_status === 'paid',
      name: session.customer_details?.name || '',
      email: session.customer_details?.email || '',
      gift: toCents(session.metadata.one_time),
      monthly: toCents(session.metadata.monthly),
      fund: session.metadata.fund,
   });
};

// Sends a donor to Stripe's page for changing a card or cancelling a monthly gift.
// They sign in with a code Stripe emails them, so there is no account to create.
const openPortal = async (res) => {
   const { data } = await stripe.billingPortal.configurations.list({ active: true, limit: 100 });
   let config = data.find((item) => item.metadata?.app === PORTAL_TAG && item.login_page?.enabled);
   if (!config) {
      config = await stripe.billingPortal.configurations.create({
         business_profile: {
            headline: 'Byelorussian Mission: manage your monthly gift',
            privacy_policy_url: `${SITE_URL}/privacy`,
            terms_of_service_url: `${SITE_URL}/privacy`,
         },
         features: {
            customer_update: { enabled: true, allowed_updates: ['email', 'address', 'phone'] },
            invoice_history: { enabled: true },
            payment_method_update: { enabled: true },
            subscription_cancel: { enabled: true, mode: 'immediately' },
         },
         login_page: { enabled: true },
         metadata: { app: PORTAL_TAG },
      });
   }
   return res.redirect(303, config.login_page.url);
};

const csvCell = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;
const htmlText = (value) =>
   String(value ?? '').replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);

// Staff list of every online banquet gift, read straight from Stripe.
const report = async (req, res) => {
   const key = String(req.query.report || '');
   const hash = crypto.createHash('sha256').update(key).digest('hex');
   if (!crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(REPORT_KEY_HASH))) {
      return res.status(404).json({ error: { message: 'Not found' } });
   }

   const rows = [];
   const since = Math.floor(new Date('2026-11-01T00:00:00-04:00').getTime() / 1000);
   for await (const session of stripe.checkout.sessions.list({ limit: 100, created: { gte: since } })) {
      if (session.metadata?.campaign !== CAMPAIGN || session.payment_status !== 'paid') continue;
      const details = session.customer_details || {};
      const address = details.address || {};
      rows.push({
         When: new Date(session.created * 1000).toLocaleString('en-US', { timeZone: 'America/New_York' }),
         Name: details.name,
         Email: details.email,
         Phone: details.phone,
         Address: [address.line1, address.line2, address.city, address.state, address.postal_code]
            .filter(Boolean)
            .join(', '),
         'One-time': session.metadata.one_time,
         Monthly: session.metadata.monthly,
         'Monthly choice': session.metadata.monthly_choice,
         Fund: session.metadata.fund,
         Tag: session.metadata.campaign,
         Mode: session.livemode ? 'live' : 'TEST',
         'Stripe customer': session.customer,
      });
   }

   const columns = rows.length ? Object.keys(rows[0]) : ['No gifts yet'];
   if (req.query.format === 'csv') {
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', 'attachment; filename="2026-banquet-online-gifts.csv"');
      return res.send([columns, ...rows.map((row) => columns.map((column) => row[column]))].map((line) => line.map(csvCell).join(',')).join('\n'));
   }

   const total = (column) => rows.reduce((sum, row) => sum + toCents(row[column]), 0);
   res.setHeader('Content-Type', 'text/html; charset=utf-8');
   res.setHeader('Cache-Control', 'no-store');
   return res.send(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex">
<title>${CAMPAIGN} online gifts</title>
<style>body{font:15px/1.4 -apple-system,Segoe UI,Roboto,sans-serif;margin:24px;color:#1d335c}table{border-collapse:collapse;margin-top:16px}th,td{border:1px solid #d8dbe2;padding:6px 10px;text-align:left;white-space:nowrap}th{background:#f3f1ea}</style>
<h1>${CAMPAIGN}: online gifts</h1>
<p><strong>${rows.length}</strong> gifts &nbsp;·&nbsp; One-time total <strong>${formatCents(total('One-time'))}</strong> &nbsp;·&nbsp; Monthly total <strong>${formatCents(total('Monthly'))}</strong> a month (${formatCents(total('Monthly') * 12)} over 12 months)</p>
<p><a href="?report=${encodeURIComponent(key)}&format=csv">Download as a spreadsheet (CSV)</a> &nbsp;·&nbsp; Refresh this page for the latest.</p>
<table><tr>${columns.map((column) => `<th>${htmlText(column)}</th>`).join('')}</tr>
${rows.map((row) => `<tr>${columns.map((column) => `<td>${htmlText(row[column])}</td>`).join('')}</tr>`).join('\n')}</table>`);
};

export default async (req, res) => {
   try {
      if (req.method === 'POST') return await createSession(req, res);
      if (req.method === 'GET' && req.query.session_id) return await sessionSummary(req, res);
      if (req.method === 'GET' && req.query.portal) return await openPortal(res);
      if (req.method === 'GET' && req.query.report) return await report(req, res);
      return res.status(405).json({ error: { message: 'Method not allowed' } });
   } catch (e) {
      console.error('banquet-giving', e);
      return res.status(500).json({ error: { message: 'Something went wrong. Please try again.' } });
   }
};
