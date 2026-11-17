import Image from 'next/image';
import { IBM_Plex_Sans, Roboto_Slab } from 'next/font/google';
import logo from '../../assets/icons/logos/text_and_letter.svg';
import styles from '../../styles/Give/Give.module.css';

export const plex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['600'] });
const slab = Roboto_Slab({ subsets: ['latin'], weight: ['400', '600'] });

// The plain frame shared by the giving pages: logo on top, one column, no site menu.
export default function GiveShell({ children }) {
   return (
      <div className={`${styles.page} ${slab.className}`}>
         <header className={styles.header}>
            <Image src={logo} alt="Byelorussian Mission" width={228} height={24} priority />
            <span className={`${styles.eyebrow} ${plex.className}`}>2026 Annual Banquet</span>
         </header>
         {children}
      </div>
   );
}
