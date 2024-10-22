import Link from 'next/link';
import Image from 'next/image';
import { Spacer } from '@nextui-org/react';
import Stack from '@mui/material/Stack';
import Social from './social';
import NH from '../fonts/NH';
import NAVTEXT from '../fonts/NAVTEXT';
import styles from '../../styles/Footers/Foot.module.css';
import logo from '../../assets/icons/logos/logo_stack.svg';
import { footerNavData } from './footerNavData';

const logoWidth = 187;
const logoHeight = 91.8;

var currentYear = new Date().getFullYear();

export default function Footer() {
   return (
      <Stack
         spacing={5}
         alignItems="center"
         sx={{
            paddingTop: '60px',
         }}
      >
         <div className={styles.footer__container}>
            {/* Логотип выровнен по левому краю без дополнительного отступа */}
            <span className={styles.footer__logo}>
               <Image src={logo} alt="BMI" width={logoWidth} height={logoHeight} />
            </span>

            <ul className={styles.footer__nav}>
               {footerNavData.map((section, index) => (
                  <li className={styles.footer__item} key={index}>
                     <NH text={section.section} />

                     {section.links.map((link, idx) => (
                        <Link className={styles.footer__link} key={idx} href={link.link} passHref>
                           <NAVTEXT text={link.text} />
                        </Link>
                     ))}
                  </li>
               ))}
            </ul>
         </div>

         <Stack spacing={2}>
            <Social />
            <NAVTEXT text={`© Copyright 2000 - ${currentYear} | All Rights Reserved`} />
         </Stack>

         <Spacer y={1.2} />
      </Stack>
   );
}
