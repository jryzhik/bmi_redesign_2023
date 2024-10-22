import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Mobile_menu from './Mobile_menu.js';
import styles from '../../styles/Navigation/Nav.module.css';
import logo from '../../assets/icons/logos/text_and_letter.svg';

const logoWidth = 227;
const logoHeight = 24;

export default function Mobile_nav_bar({ menu }) {
   const [menuExpanded, setmenuExpanded] = useState(false);

   function toggleMenu() {
      setmenuExpanded(!menuExpanded);
      if (!menuExpanded) {
         document.body.style.overflowY = 'hidden';
         document.body.style.width = '100vw';
         document.body.style.height = '100vh';
      } else {
         document.body.style.removeProperty('overflow-y');
         document.body.style.removeProperty('height');
         document.body.style.removeProperty('width');
      }
   }
   return (
      <>
         <Mobile_menu menuExpanded={menuExpanded} toggleMenu={toggleMenu} menuArray={menu} />
         <div className={styles.container}>
            <Link href="/">
               <div className="logo">
                  <Image src={logo} alt="BMI" width={logoWidth} height={logoHeight} />
               </div>
            </Link>

            <div className={styles.menu}>
               <Link href="/search">
                  <Image src="/img/icons/search_icon.svg" alt="search" width={16} height={16} />
               </Link>

               <div onClick={toggleMenu}>
                  <Image src="/img/icons/menu_lines.svg" alt="menu" width={16} height={16} />
               </div>
            </div>
         </div>
      </>
   );
}
