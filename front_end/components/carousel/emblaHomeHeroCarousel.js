import Link from 'next/link';
import Image from 'next/image';
import { useId } from 'react';
import P from '../fonts/P';
import TITLE from '../fonts/TITLE';
import ST from '../fonts/ST';
import H1 from '../fonts/H1';
import theme from '../../styles/theme';
import Styles from '../../styles/Carousel/CarouselHero.module.css';
import styles from '../../styles/Hero/Hero.module.css';

const EmblaHomeHeroCarousel = (props) => {
   const { slides } = props;
   const id = useId();

   return slides.map(({ headerText, subText, imageUrl, imageFocus, color1, color2, link }) => {
      const ContentWrapper = link ? Link : 'div';
      const wrapperProps = link ? { href: `/${link}` } : {};
      const isBanquetLink = link && link.startsWith('banquet');

      return (
         <article className={Styles.slideEmblaHero}>
            <ContentWrapper {...wrapperProps}>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     gap: '.7rem',
                     paddingTop: '2vh',
                  }}
               >
                  <div className={styles.hBox}>
                     <TITLE text="Byelorussian" color={theme.colors.WHITE} />
                     <ST text="Mission" color={theme.colors.WHITE} />
                  </div>

                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyItems: 'center',
                        maxWidth: '60vw',
                        gap: '2rem',
                     }}
                  >
                     <H1 text={headerText} textAlign={'center'} color={theme.colors.WHITE} />

                     <P text={subText} textAlign={'center'} color={theme.colors.WHITE} />
                  </div>

                  {isBanquetLink && <button className={Styles.card_button}>Reserve Your Spot</button>}
               </div>

               <div
                  className={styles.imageContainer}
                  style={{
                     borderBottomLeftRadius: '7px',
                     position: 'absolute',
                     borderBottomRightRadius: '7px',
                     top: 0,
                     right: 0,
                     bottom: 0,
                     left: 0,
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
                     }}
                  />
               </div>

               <div
                  className={styles.gradientOverlay}
                  style={{
                     backgroundImage: `linear-gradient(${color1},${color2}, transparent)`,
                     zIndex: -80,
                  }}
               />
            </ContentWrapper>
         </article>
      );
   });
};

export default EmblaHomeHeroCarousel;
