import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GiveShell, { plex } from '../../components/give/GiveShell';
import styles from '../../styles/Give/Give.module.css';
import { MANAGE_URL, formatCents } from '../../tools/banquetGiving';

// Tells Google Tag Manager about a gift, once per gift even if the page is reloaded.
// A trigger on the custom event "donation" in Tag Manager can read these fields.
const reportDonation = (id, details) => {
   const key = `donation-reported-${id}`;
   try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
   } catch (e) {}
   window.dataLayer = window.dataLayer || [];
   window.dataLayer.push({ event: 'donation', currency: 'USD', transaction_id: id, ...details });
};

// The site's Givebutter forms send donors here too (each campaign's "Thank you page"
// setting), with gb_transaction, gb_amount, gb_frequency and gb_campaign in the address.
// Returns null when the address has none of them.
const givebutterGift = (query) => {
   const text = (value) => (typeof value === 'string' ? value.trim() : '');
   const number = text(query.gb_transaction);
   const dollars = Number.parseFloat(text(query.gb_amount));
   const amount = Number.isFinite(dollars) && dollars > 0 ? Math.round(dollars * 100) : 0;
   const frequency = text(query.gb_frequency).toLowerCase();
   const campaign = text(query.gb_campaign);
   if (!number && !amount && !frequency && !campaign) return null;
   return { number, amount, frequency, campaign };
};

const FREQUENCIES = { monthly: 'Every month', quarterly: 'Every quarter', yearly: 'Every year' };

export default function GiveThanks() {
   const router = useRouter();
   const [gift, setGift] = useState(null);
   const sessionId = router.isReady && typeof router.query.session_id === 'string' ? router.query.session_id : '';
   const butter = router.isReady && !sessionId ? givebutterGift(router.query) : null;

   useEffect(() => {
      if (!sessionId) return;
      try {
         sessionStorage.removeItem('banquet-giving');
      } catch (e) {}
      const report = (data) =>
         reportDonation(sessionId, {
            donation_source: 'stripe',
            ...(data
               ? {
                    value: (data.gift || data.monthly) / 100,
                    donation_one_time: data.gift / 100,
                    donation_monthly: data.monthly / 100,
                    donation_frequency: data.gift && data.monthly ? 'once+monthly' : data.monthly ? 'monthly' : 'once',
                    donation_fund: data.fund,
                 }
               : {}),
         });
      fetch(`/api/banquet-giving?session_id=${encodeURIComponent(sessionId)}`)
         .then((response) => (response.ok ? response.json() : null))
         .then((data) => {
            setGift(data);
            report(data);
         })
         .catch(() => report(null));
   }, [sessionId]);

   useEffect(() => {
      if (!butter?.number) return;
      reportDonation(butter.number, {
         donation_source: 'givebutter',
         ...(butter.amount ? { value: butter.amount / 100 } : {}),
         donation_frequency: butter.frequency || 'once',
         donation_campaign: butter.campaign,
      });
   }, [butter?.number]);

   const firstName = gift?.name ? gift.name.trim().split(/\s+/)[0] : '';

   if (butter) {
      return (
         <GiveShell eyebrow={null}>
            <section className={`${styles.step} ${styles.thanks}`}>
               <h1 className={`${styles.heading} ${styles.thanksHeading} ${plex.className}`}>Thank you.</h1>
               <p>Your gift has been received. May God bless you for your generosity.</p>
               {butter.amount ? (
                  <dl className={styles.summary}>
                     <div>
                        <dt>Your gift</dt>
                        <dd>
                           <strong className={plex.className}>{formatCents(butter.amount)}</strong>
                           {FREQUENCIES[butter.frequency] ? <span>{FREQUENCIES[butter.frequency]}</span> : null}
                        </dd>
                     </div>
                  </dl>
               ) : null}
               <p>A receipt is on its way to your email. Please keep it for your tax records.</p>
               <p className={styles.fine}>
                  <a href="/">Back to byelorussianmission.org</a>
               </p>
            </section>
         </GiveShell>
      );
   }

   return (
      <GiveShell eyebrow={router.isReady ? undefined : null}>
         <section className={`${styles.step} ${styles.thanks}`}>
            <h1 className={`${styles.heading} ${styles.thanksHeading} ${plex.className}`}>
               Thank you{firstName ? `, ${firstName}` : ''}.
            </h1>
            <p>
               {gift && !gift.gift ? 'Your monthly gift is set up.' : 'Your gift has been received.'} May God bless you for your
               generosity.
            </p>
            {gift ? (
               <dl className={styles.summary}>
                  {gift.gift ? (
                     <div>
                        <dt>One-time gift</dt>
                        <dd>
                           <strong className={plex.className}>{formatCents(gift.gift)}</strong>
                        </dd>
                     </div>
                  ) : null}
                  {gift.monthly ? (
                     <div>
                        <dt>Monthly gift</dt>
                        <dd>
                           <strong className={plex.className}>{formatCents(gift.monthly)}</strong>
                           <span>Starts {gift.monthlyStart}, until you cancel</span>
                        </dd>
                     </div>
                  ) : null}
                  <div>
                     <dt>Fund</dt>
                     <dd>
                        <strong className={plex.className}>{gift.fund}</strong>
                     </dd>
                  </div>
               </dl>
            ) : null}
            {!gift || gift.gift ? (
               <p>
                  A receipt is on its way{gift?.email ? ` to ${gift.email}` : ' to your email'}. Please keep it for your tax
                  records.
               </p>
            ) : null}
            {gift?.monthly ? <p>You’ll get a receipt by email each month when your monthly gift is charged.</p> : null}
            {!gift || gift.monthly ? (
               <p className={styles.fine}>
                  You can change or cancel a monthly gift at any time at <a href="/give/manage">{MANAGE_URL}</a>.
               </p>
            ) : null}
         </section>
      </GiveShell>
   );
}

GiveThanks.hideSiteChrome = true;
