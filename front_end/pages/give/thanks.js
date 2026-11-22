import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GiveShell, { plex } from '../../components/give/GiveShell';
import styles from '../../styles/Give/Give.module.css';
import { MANAGE_URL, formatCents } from '../../tools/banquetGiving';

export default function GiveThanks() {
   const router = useRouter();
   const [gift, setGift] = useState(null);

   useEffect(() => {
      if (!router.isReady || !router.query.session_id) return;
      try {
         sessionStorage.removeItem('banquet-giving');
      } catch (e) {}
      fetch(`/api/banquet-giving?session_id=${encodeURIComponent(router.query.session_id)}`)
         .then((response) => (response.ok ? response.json() : null))
         .then(setGift)
         .catch(() => {});
   }, [router.isReady, router.query.session_id]);

   const firstName = gift?.name ? gift.name.trim().split(/\s+/)[0] : '';

   return (
      <GiveShell>
         <section className={`${styles.step} ${styles.thanks}`}>
            <h1 className={`${styles.heading} ${styles.thanksHeading} ${plex.className}`}>
               Thank you{firstName ? `, ${firstName}` : ''}.
            </h1>
            <p>
               {gift && !gift.gift ? 'Your monthly gift is set up.' : 'Your gift has been received.'} May God bless you for
               your generosity.
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
                  A receipt is on its way{gift?.email ? ` to ${gift.email}` : ' to your email'}. Please keep it for your
                  tax records.
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
