import { useEffect, useState } from 'react';
import GiveShell, { plex } from '../../components/give/GiveShell';
import styles from '../../styles/Give/Give.module.css';
import {
   DEFAULT_FUND,
   FUNDS,
   GIFT_AMOUNTS,
   MAX_CENTS,
   MIN_CENTS,
   MONTHLY_OPTIONS,
   formatCents,
   giftSummary,
   matchMonthlyCents,
   toCents,
} from '../../tools/banquetGiving';

const SAVED_KEY = 'banquet-giving';
const EMPTY = { gift: null, giftOther: '', monthlyKind: null, monthlyOther: '', fund: DEFAULT_FUND };

export default function Give() {
   const [choice, setChoice] = useState(EMPTY);
   const [sending, setSending] = useState(false);
   const [error, setError] = useState('');
   const { gift, giftOther, monthlyKind, monthlyOther, fund } = choice;
   const update = (changes) => {
      setError('');
      setChoice((current) => ({ ...current, ...changes }));
   };

   // Keep the guest's choices if they come back from the payment page.
   useEffect(() => {
      try {
         const saved = JSON.parse(sessionStorage.getItem(SAVED_KEY));
         if (saved) setChoice({ ...EMPTY, ...saved });
      } catch (e) {}
      // Coming back with the Back button restores the page as it was left, button still disabled.
      const onShow = () => setSending(false);
      window.addEventListener('pageshow', onShow);
      return () => window.removeEventListener('pageshow', onShow);
   }, []);
   useEffect(() => {
      try {
         sessionStorage.setItem(SAVED_KEY, JSON.stringify(choice));
      } catch (e) {}
   }, [choice]);

   const giftCents = gift === 'other' ? toCents(giftOther) : (gift || 0) * 100;
   const matchCents = matchMonthlyCents(giftCents);
   const canMatch = matchCents >= MIN_CENTS;
   let monthlyCents = 0;
   if (monthlyKind === 'match') monthlyCents = canMatch ? matchCents : 0;
   else if (monthlyKind === 'other') monthlyCents = toCents(monthlyOther);
   else if (monthlyKind) monthlyCents = MONTHLY_OPTIONS.find((option) => option.kind === monthlyKind).amount * 100;

   const outOfRange = [giftCents, monthlyCents].some((cents) => cents && (cents < MIN_CENTS || cents > MAX_CENTS));
   const ready = (giftCents || monthlyCents) && !outOfRange;

   const submit = async () => {
      if (!ready || sending) return;
      setSending(true);
      setError('');
      try {
         const response = await fetch('/api/banquet-giving', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               gift: giftCents / 100,
               monthly: monthlyCents / 100,
               monthlyKind: monthlyCents ? monthlyKind : null,
               fund,
            }),
         });
         const result = await response.json();
         if (!response.ok || !result.url) throw new Error(result.error?.message);
         window.location.assign(result.url);
      } catch (e) {
         setSending(false);
         setError(e.message || 'Something went wrong. Please try again.');
      }
   };

   return (
      <GiveShell>
         <section className={styles.intro}>
            <h1 className={plex.className}>Give this Giving Tuesday</h1>
            <p>
               At our annual banquet we shared a goal of $500,000 for the year ahead. Whether you were with us that
               evening or couldn’t be there, you can be part of it today.
            </p>
         </section>

         <section className={styles.step}>
            <h2 className={`${styles.heading} ${plex.className}`}>
               <span className={styles.number}>1</span> My Giving Tuesday gift
            </h2>
            <div className={styles.amounts}>
               {GIFT_AMOUNTS.map((amount) => (
                  <button
                     type="button"
                     key={amount}
                     className={`${styles.option} ${plex.className} ${gift === amount ? styles.selected : ''}`}
                     aria-pressed={gift === amount}
                     onClick={() => update({ gift: gift === amount ? null : amount })}
                  >
                     {formatCents(amount * 100)}
                  </button>
               ))}
            </div>
            <label className={`${styles.other} ${gift === 'other' ? styles.selected : ''}`}>
               <span className={styles.otherLabel}>My own amount</span>
               <span className={styles.dollar}>$</span>
               <input
                  className={plex.className}
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="0"
                  aria-label="My own one-time amount in dollars"
                  value={giftOther}
                  onFocus={() => update({ gift: 'other' })}
                  onChange={(event) => update({ gift: 'other', giftOther: event.target.value.replace(/[^0-9.,]/g, '') })}
               />
            </label>
            <p className={styles.hint}>A one-time gift, charged today.</p>
         </section>

         <section className={styles.step}>
            <h2 className={`${styles.heading} ${plex.className}`}>
               <span className={styles.number}>2</span> My 12-month pledge <span className={styles.optional}>optional</span>
            </h2>
            <div className={styles.rows}>
               <button
                  type="button"
                  className={`${styles.row} ${monthlyKind === 'match' && canMatch ? styles.selected : ''}`}
                  aria-pressed={monthlyKind === 'match' && canMatch}
                  disabled={!canMatch}
                  onClick={() => update({ monthlyKind: monthlyKind === 'match' ? null : 'match' })}
               >
                  <span className={`${styles.rowTitle} ${plex.className}`}>Match today’s gift over 12 months</span>
                  <span className={styles.rowNote}>
                     {canMatch
                        ? `${formatCents(giftCents)} again, as ${formatCents(matchCents)} a month`
                        : 'Choose a one-time gift above first'}
                  </span>
               </button>
               {MONTHLY_OPTIONS.map((option) => (
                  <button
                     type="button"
                     key={option.kind}
                     className={`${styles.row} ${monthlyKind === option.kind ? styles.selected : ''}`}
                     aria-pressed={monthlyKind === option.kind}
                     onClick={() => update({ monthlyKind: monthlyKind === option.kind ? null : option.kind })}
                  >
                     <span className={`${styles.rowTitle} ${plex.className}`}>{formatCents(option.amount * 100)} a month</span>
                     {option.note ? <span className={styles.rowNote}>{option.note}</span> : null}
                  </button>
               ))}
               <label className={`${styles.other} ${monthlyKind === 'other' ? styles.selected : ''}`}>
                  <span className={styles.otherLabel}>My own monthly amount</span>
                  <span className={styles.dollar}>$</span>
                  <input
                     className={plex.className}
                     inputMode="decimal"
                     autoComplete="off"
                     placeholder="0"
                     aria-label="My own monthly amount in dollars"
                     value={monthlyOther}
                     onFocus={() => update({ monthlyKind: 'other' })}
                     onChange={(event) =>
                        update({ monthlyKind: 'other', monthlyOther: event.target.value.replace(/[^0-9.,]/g, '') })
                     }
                  />
               </label>
            </div>
            <p className={styles.hint}>Monthly gifts start next month and continue until you cancel.</p>
         </section>

         <section className={styles.step}>
            <h2 className={`${styles.heading} ${plex.className}`}>Where your gift goes</h2>
            <div className={styles.funds}>
               {FUNDS.map((item) => (
                  <button
                     type="button"
                     key={item.key}
                     className={`${styles.option} ${styles.fund} ${plex.className} ${fund === item.key ? styles.selected : ''}`}
                     aria-pressed={fund === item.key}
                     onClick={() => update({ fund: item.key })}
                  >
                     {item.name}
                  </button>
               ))}
            </div>
         </section>

         <section className={styles.step} aria-live="polite">
            <h2 className={`${styles.heading} ${plex.className}`}>Your gift</h2>
            {ready ? (
               <dl className={styles.summary}>
                  {giftSummary({ giftCents, monthlyCents, fund }).map((line) => (
                     <div key={line.label}>
                        <dt>{line.label}</dt>
                        <dd>
                           <strong className={plex.className}>{line.value}</strong>
                           {line.detail ? <span>{line.detail}</span> : null}
                        </dd>
                     </div>
                  ))}
               </dl>
            ) : (
               <p className={styles.hint}>
                  {outOfRange
                     ? `Please enter an amount between ${formatCents(MIN_CENTS)} and ${formatCents(MAX_CENTS)}.`
                     : 'Choose a one-time gift, a monthly pledge, or both.'}
               </p>
            )}
            {error ? (
               <p className={styles.error} role="alert">
                  {error}
               </p>
            ) : null}
            <button type="button" className={`${styles.pay} ${plex.className}`} disabled={!ready || sending} onClick={submit}>
               {sending ? 'One moment…' : 'Continue to donate'}
            </button>
            <p className={styles.fine}>
               Next you’ll add your name, email, phone and mailing address, then choose how to pay: card, Apple Pay,
               Google Pay or your bank. Nothing is charged until you confirm there.
            </p>
         </section>

         <p className={styles.later}>
            Prefer to give by check? Make it payable to Byelorussian Mission, Inc.
            <br />
            3395 Chamblee Gap Road, Cumming, GA 30040
         </p>
      </GiveShell>
   );
}

Give.hideSiteChrome = true;
