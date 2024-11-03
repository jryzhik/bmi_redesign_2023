import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import NAVTEXT from '../fonts/NAVTEXT';
import NH from '../fonts/NH';
import theme from '../../styles/theme.js';
import styles from '../../styles/Navigation/Nav.module.css';
import logo from '../../assets/icons/logos/text_and_letter.svg';

const logoWidth = 227;
const logoHeight = 24;

export default function Default_nav_bar({ menu }) {
   const [hoveredItem, setHoveredItem] = useState(null);
   const [hoverTimeout, setHoverTimeout] = useState(null);

   const handleMouseEnter = (index) => {
      if (hoverTimeout) {
         clearTimeout(hoverTimeout);
         setHoverTimeout(null);
      }
      setHoveredItem(index);
   };

   const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
         setHoveredItem(null);
      }, 1000);

      setHoverTimeout(timeout);
   };

   const [hoveredItemSubMenu, sethoveredItemSubMenu] = useState(null);

   const handleMouseEnterSub = (subIndex) => {
      sethoveredItemSubMenu(subIndex);
   };

   const handleMouseLeaveSub = () => {
      sethoveredItemSubMenu(null);
   };

   const isLinkActive = (link, menu) => {
      if (menu) return menu.some(([text, url]) => url === link.replace('/', ''));
   };

   const router = useRouter();

   useEffect(() => {
      if (hoverTimeout) {
         clearTimeout(hoverTimeout);
         setHoverTimeout(null);
      }
      setHoveredItem(null);
   }, [router]);

   const isExternalLink = (url) => {
      return url.startsWith('http://') || url.startsWith('https://');
   };

   const renderLink = (url, children) => {
      if (isExternalLink(url)) {
         return <a href={url}>{children}</a>;
      }
      return <Link href={'/' + url}>{children}</Link>;
   };

   return (
      <div className={styles.container}>
         <Link href="/">
            <Image src={logo} alt="BMI" width={logoWidth} height={logoHeight} />
         </Link>

         <div className={styles.menu}>
            {menu.map((menu_item, index) => (
               <div key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                  {hoveredItem === index ? (
                     <>
                        <div className={styles.hoverME}>
                           {Array.isArray(menu_item.primary) ? (
                              menu_item.primary[1] === router.pathname.replace('/', '') ? (
                                 <NH text={menu_item.primary[0]} color={theme.colors.BLACK} fontweight="600" />
                              ) : (
                                 renderLink(
                                    menu_item.primary[1],
                                    <NH
                                       text={menu_item.primary[0]}
                                       color={theme.colors.BLACK}
                                       fontweight="300"
                                       decoration="underline"
                                    />
                                 )
                              )
                           ) : isLinkActive(router.pathname, menu_item.secondary) ? (
                              <NH text={menu_item.primary} color={theme.colors.BLACK} fontweight="600" />
                           ) : (
                              <NH text={menu_item.primary} color={theme.colors.BLACK} decoration="underline" fontweight="300" />
                           )}
                        </div>

                        {menu_item.secondary === null ? (
                           console.log('null element menu')
                        ) : (
                           <div className={styles.sub_menu}>
                              {menu_item.secondary.map((sub_item, subIndex) => (
                                 <div
                                    key={subIndex}
                                    onMouseEnter={() => handleMouseEnterSub(subIndex)}
                                    onMouseLeave={handleMouseLeaveSub}
                                 >
                                    {hoveredItemSubMenu === subIndex ? (
                                       sub_item[1] === router.pathname.replace('/', '') ? (
                                          renderLink(
                                             sub_item[1],
                                             <NH key={subIndex} text={sub_item[0]} color={theme.colors.BLACK} fontweight="600" />
                                          )
                                       ) : (
                                          renderLink(
                                             sub_item[1],
                                             <NH
                                                key={subIndex}
                                                text={sub_item[0]}
                                                color={theme.colors.BLACK}
                                                fontweight="300"
                                                decoration="underline"
                                             />
                                          )
                                       )
                                    ) : sub_item[1] === router.pathname.replace('/', '') ? (
                                       <NH key={subIndex} text={sub_item[0]} color={theme.colors.BLACK} fontweight="600" />
                                    ) : (
                                       renderLink(
                                          sub_item[1],
                                          <NAVTEXT key={subIndex} text={sub_item[0]} color={theme.colors.BLACK} />
                                       )
                                    )}
                                 </div>
                              ))}
                           </div>
                        )}
                     </>
                  ) : (
                     <>
                        {Array.isArray(menu_item.primary) ? (
                           menu_item.primary[1] === router.pathname.replace('/', '') ? (
                              <NH text={menu_item.primary[0]} color={theme.colors.BLACK} fontweight="600" />
                           ) : (
                              <NAVTEXT text={menu_item.primary[0]} color={theme.colors.BLACK} />
                           )
                        ) : isLinkActive(router.pathname, menu_item.secondary) ? (
                           <NH text={menu_item.primary} color={theme.colors.BLACK} fontweight="600" />
                        ) : (
                           <NAVTEXT text={menu_item.primary} color={theme.colors.BLACK} />
                        )}
                     </>
                  )}
               </div>
            ))}

            {/* <Link href="/search">
               <Image src="/img/icons/search_icon.svg" alt="search" width={16} height={16} />
            </Link> */}
         </div>
      </div>
   );
}
