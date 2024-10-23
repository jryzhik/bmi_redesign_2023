import React from 'react';
import Styles from '../../styles/Carousel/CarouselHero.module.css';
import theme from '../../styles/theme';
import P from '../fonts/P';
import Image from 'next/image';
import styles from '../../styles/Hero/Hero.module.css';
import TITLE from '../fonts/TITLE';
import ST from '../fonts/ST';
import H1 from '../fonts/H1';
import Link from 'next/link';

const EmblaHomeHeroCarousel = (props) => {
   const { slides } = props;
   return slides.map(({ headerText, subText, imageUrl, imageFocus, color1, color2, link }) => {
      const ContentWrapper = link ? Link : 'div';
      const wrapperProps = link ? { href: `/${link}` } : {};

      return (
         <article className={Styles.slideEmblaHero} key={headerText}>
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
