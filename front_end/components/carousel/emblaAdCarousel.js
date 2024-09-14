import React, {useEffect, useState} from 'react';
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
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const {slides} = props;
  console.log(slides);
  return slides.map(({headerText, subText, imageUrl, link, imageFocus, color1, color2}) => (
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
            maxWidth: windowWidth <= 1000 ? '80vw' : '45vw',
            gap: '2rem',
          }}
        >
          <H1 text={headerText} textAlign={'center'} color={theme.colors.WHITE} />
          <P text={subText} textAlign={'center'} color={theme.colors.WHITE} />
          <Link href={link} style={{width: '100%'}}>
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
