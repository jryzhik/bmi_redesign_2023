// Settings for the banquet giving page (/give). The page and its API route both
// read from here so the pledge card, the summary and the Stripe checkout agree.

export const CAMPAIGN = '2026 Banquet';

// Same amounts, in the same order, as the paper pledge card.
export const GIFT_AMOUNTS = [100000, 50000, 25000, 5000, 1000, 500, 250, 100];

export const MONTHLY_OPTIONS = [
   { kind: '50', amount: 50, note: 'cares for one orphan' },
   { kind: '100', amount: 100 },
   { kind: '416', amount: 416, note: 'a 1% share of the goal' },
];

export const FUNDS = [
   { key: 'general', name: 'General Fund' },
   { key: 'orphan', name: 'Orphan Sponsorship' },
   { key: 'bible', name: '2030 Bible Fund' },
   { key: 'construction', name: 'Construction Fund' },
   { key: 'daycare', name: 'DayCare Centers' },
   { key: 'conferences', name: 'Conferences' },
];
export const DEFAULT_FUND = 'general';

export const MANAGE_URL = 'byelorussianmission.org/give/manage';

// Stripe's limits for a single charge.
export const MIN_CENTS = 100;
export const MAX_CENTS = 99999900;

export const fundName = (key) => (FUNDS.find((fund) => fund.key === key) || FUNDS[0]).name;

// "1,250.50" or "$500" typed by a guest -> cents. 0 when it isn't a usable amount.
export const toCents = (value) => {
   const number = typeof value === 'number' ? value : Number(String(value || '').replace(/[$,\s]/g, ''));
   if (!Number.isFinite(number) || number <= 0) return 0;
   return Math.round(number * 100);
};

export const matchMonthlyCents = (giftCents) => Math.round(giftCents / 12);

export const formatCents = (cents) => {
   const whole = cents % 100 === 0;
   return (cents / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: whole ? 0 : 2,
      maximumFractionDigits: whole ? 0 : 2,
   });
};

// Monthly gifts begin one month after the night of the gift (the 31st becomes the
// last day of a shorter month).
export const monthlyStart = (from = new Date()) => {
   const start = new Date(from);
   const day = start.getUTCDate();
   start.setUTCDate(1);
   start.setUTCMonth(start.getUTCMonth() + 1);
   const lastDay = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1, 0)).getUTCDate();
   start.setUTCDate(Math.min(day, lastDay));
   return start;
};

// "December 17", as the guests at the banquet see the date.
export const formatStart = (date) =>
   date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', timeZone: 'America/New_York' });

// The one plain summary: what is charged tonight, what is charged each month, which fund.
// `short` is the one-line form shown above the pay button on Stripe's page.
export const giftSummary = ({ giftCents, monthlyCents, fund, start = monthlyStart() }) => {
   const from = formatStart(start);
   return [
      giftCents
         ? { label: 'Charged tonight', value: formatCents(giftCents), detail: 'One-time gift' }
         : { label: 'Charged tonight', value: 'Nothing', detail: `Your first monthly gift is ${from}` },
      monthlyCents
         ? {
              label: 'Charged each month',
              value: formatCents(monthlyCents),
              detail: `Starting ${from}, until you cancel`,
              short: `${formatCents(monthlyCents)} starting ${from}`,
           }
         : { label: 'Charged each month', value: 'Nothing', detail: 'No monthly gift' },
      { label: 'Fund', value: fundName(fund) },
   ];
};
