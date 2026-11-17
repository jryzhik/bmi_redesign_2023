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

// The one plain summary: what is charged tonight, what is charged each month, which fund.
export const giftSummary = ({ giftCents, monthlyCents, fund }) => {
   const lines = [];
   if (giftCents && monthlyCents) {
      lines.push({
         label: 'Charged tonight',
         value: formatCents(giftCents + monthlyCents),
         detail: `${formatCents(giftCents)} gift + ${formatCents(monthlyCents)} first monthly gift`,
      });
   } else if (giftCents) {
      lines.push({ label: 'Charged tonight', value: formatCents(giftCents), detail: 'One-time gift' });
   } else if (monthlyCents) {
      lines.push({ label: 'Charged tonight', value: formatCents(monthlyCents), detail: 'First monthly gift' });
   }
   lines.push(
      monthlyCents
         ? { label: 'Charged each month', value: formatCents(monthlyCents), detail: 'Until you cancel' }
         : { label: 'Charged each month', value: 'Nothing', detail: 'No monthly gift' },
   );
   lines.push({ label: 'Fund', value: fundName(fund) });
   return lines;
};
