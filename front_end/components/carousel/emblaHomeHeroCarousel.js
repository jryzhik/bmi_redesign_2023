import React from 'react';
import Styles from '../../styles/Carousel/CarouselHero.module.css';
import theme from '../../styles/theme';
import P from '../fonts/P';
import Image from 'next/image';
import styles from '../../styles/Hero/Hero.module.css';
import TITLE from '../fonts/TITLE';
import ST from '../fonts/ST';
import H1 from '../fonts/H1';

const EmblaHomeHeroCarousel = (props) => {
  const {slides} = props;
  return slides.map(
    ({headerText, subText, imageUrl, imageFocus, color1, color2}) => (
      <article className={Styles.slideEmblaHero} key={headerText}>
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
            <H1
              text={headerText}
              textAlign={'center'}
              color={theme.colors.WHITE}
            />
            <P text={subText} textAlign={'center'} color={theme.colors.WHITE} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            priority={true}
            src={imageUrl}
            alt="Background"
            className={styles.image}
            width={1440}
            height={1471}
            quality={80}
            style={{
              objectFit: 'cover',
              objectPosition: imageFocus,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -100,
              borderBottomLeftRadius: '7px',
              borderBottomRightRadius: '7px',
              priority: true,
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
      </article>
    ),
  );
};

export default EmblaHomeHeroCarousel;
