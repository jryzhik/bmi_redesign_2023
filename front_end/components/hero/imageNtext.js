import Image from 'next/image';
import PageParentText from './pageParentText';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import P from '../fonts/P';
import styles from '../../styles/Hero/Hero.module.css';

const imageWidth = 1440;
const imageHeight = 1081;
const imageQuality = 100;

export default function ImageNtext({ color1, color2, imageUrl, textParent, textChild, headerText, subText, imageFocus, scale }) {
   const gradient = `linear-gradient(${color1},${color2}, transparent)`;

   return (
      <>
         <div className={styles.container}>
            <div className={styles.centerModule}>
               <PageParentText textParent={textParent} textChild={textChild} color={theme.colors.WHITE} />

               <div className={styles.bottomSpacer}>
                  <H1 text={headerText} color={theme.colors.WHITE} />
               </div>

               <P text={subText} color={theme.colors.WHITE} />
            </div>

            <div className={styles.gradientOverlay} style={{ backgroundImage: gradient }} />

            <div className={styles.imageContainer}>
               <Image
                  src={imageUrl}
                  className={styles.image}
                  alt="Background"
                  width={imageWidth}
                  height={imageHeight}
                  quality={imageQuality}
                  priority={true}
                  style={{
                     objectFit: 'cover',
                     objectPosition: imageFocus,
                     // Adjust the position to focus on the desired part of the image
                     width: '100%',
                     height: '100%',
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     zIndex: -100,
                     borderBottomLeftRadius: '7px',
                     borderBottomRightRadius: '7px',
                     transform: `scale(${scale})`,
                  }}
               />
            </div>
         </div>
      </>
   );
}
