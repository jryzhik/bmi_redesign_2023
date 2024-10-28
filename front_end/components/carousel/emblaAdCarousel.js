import Link from 'next/link';
import Image from 'next/image';
import { useId } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import theme from '../../styles/theme';
import Grid from '@mui/material/Unstable_Grid2';
import RoundedButton from '../buttons/roundedButton';
import P from '../fonts/P';
import H1 from '../fonts/H1';
import Styles from '../../styles/Carousel/CarouselAd.module.css';
import styles from '../../styles/Hero/Hero.module.css';
import { dollarButton } from '../../styles/Donate/ColorDonate.module.css';

const EmblaAdCarousel = (props) => {
   const isMedia = useMediaQuery('(max-width: 1000.5px)');
   const id = useId();
   const { slides } = props;

   return slides.map(({ headerText, subText, imageUrl, link, imageFocus, color1, color2 }) => (
      <article className={Styles.slideEmblaAd} key={`${id}${link}`}>
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyItems: 'center',
                  maxWidth: isMedia ? '80vw' : '45vw',
                  gap: '2rem',
               }}
            >
               <H1 text={headerText} textAlign={'center'} color={theme.colors.WHITE} />

               <P text={subText} textAlign={'center'} color={theme.colors.WHITE} />

               <Link href={link} style={{ width: '100%' }}>
                  <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                     <RoundedButton text="learn more" passedStyle={dollarButton} />
                  </Grid>
               </Link>
            </div>
         </div>

         <div
            className={styles.imageContainer}
            style={{
               borderBottomLeftRadius: '7px',
               position: 'absolute',
               borderBottomRightRadius: '7px',
               top: 0,
               right: 0,
               left: 0,
               bottom: 0,
               zIndex: -100,
            }}
         >
            <Image
               priority={true}
               src={imageUrl}
               alt="Background"
               width={1440}
               height={1471}
               quality={80}
               style={{
                  objectFit: 'cover',
                  borderBottomRightRadius: '7px',
                  borderBottomLeftRadius: '7px',
                  objectPosition: imageFocus,
                  width: '99.2%',
                  height: '100%',
                  priority: true,
               }}
            />
         </div>

         <div
            className={styles.gradientOverlay}
            style={{
               backgroundImage: `linear-gradient(${color1},${color2}, transparent)`,
            }}
         />
      </article>
   ));
};

export default EmblaAdCarousel;
