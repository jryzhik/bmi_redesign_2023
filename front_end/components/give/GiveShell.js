import Image from 'next/image';
import { IBM_Plex_Sans, Roboto_Slab } from 'next/font/google';
import logo from '../../assets/icons/logos/text_and_letter.svg';
import styles from '../../styles/Give/Give.module.css';

export const plex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['600'] });
export const slab = Roboto_Slab({ subsets: ['latin'], weight: ['400', '600'] });

const GIVING_TUESDAY = 'Giving Tuesday · December 1, 2026';

// The plain frame shared by the giving pages: logo on top, one column, no site menu.
// Pass eyebrow={null} to leave the line under the logo out.
export default function GiveShell({ children, eyebrow = GIVING_TUESDAY }) {
   return (
      <div className={`${styles.page} ${slab.className}`}>
         <header className={styles.header}>
            <Image src={logo} alt="Byelorussian Mission" width={228} height={24} priority />
            {eyebrow ? <span className={`${styles.eyebrow} ${plex.className}`}>{eyebrow}</span> : null}
         </header>
         {children}
      </div>
   );
}
