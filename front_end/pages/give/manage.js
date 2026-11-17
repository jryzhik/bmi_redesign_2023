import GiveShell, { plex } from '../../components/give/GiveShell';
import styles from '../../styles/Give/Give.module.css';

export default function GiveManage() {
   return (
      <GiveShell>
         <section className={styles.step}>
            <h1 className={`${styles.heading} ${plex.className}`}>Your monthly gift</h1>
            <p>
               You can update your card or cancel your monthly gift here at any time. Enter the email you gave with, and
               we’ll email you a secure link. There is no password to remember.
            </p>
            <a className={`${styles.pay} ${plex.className}`} href="/api/banquet-giving?portal=1">
               Manage my monthly gift
            </a>
            <p className={styles.fine}>
               To change the amount, cancel your monthly gift here and start a new one for the amount you’d like.
            </p>
         </section>
      </GiveShell>
   );
}

GiveManage.hideSiteChrome = true;
