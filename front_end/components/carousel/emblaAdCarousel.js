import React from 'react';
import Styles from '../../styles/Carousel/CarouselAd.module.css';
import styles from '../../styles/Hero/Hero.module.css';
import H1 from '../fonts/H1';
import theme from '../../styles/theme';
import P from '../fonts/P';
import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Unstable_Grid2';
import RoundedButton from '../buttons/roundedButton';
import {dollarButton} from '../../styles/Donate/ColorDonate.module.css';

const EmblaAdCarousel = (props) => {
  const {slides} = props;
  console.log(slides);
  return slides.map(
    ({
      headerText,
      subText,
      imageUrl,
      link,
      imageFocus,
      scale,
      color1,
      color2,
    }) => (
      <article className={Styles.slideEmblaAd} key={headerText}>
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
              maxWidth: '45vw',
              gap: '2rem',
            }}
          >
            <H1
              text={headerText}
              textAlign={'center'}
              color={theme.colors.WHITE}
            />
            <P text={subText} textAlign={'center'} color={theme.colors.WHITE} />
            <Link href={link} style={{width: '100%'}}>
              <Grid
                xs={12}
                md={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <RoundedButton text="learn more" passedStyle={dollarButton} />
              </Grid>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            priority={true}
            src={imageUrl}
            className={styles.image}
            alt="Background"
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
              transform: `scale(${scale})`,
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
    ),
  );
};

export default EmblaAdCarousel;
