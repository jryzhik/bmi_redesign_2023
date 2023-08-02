import React from 'react';
import styles from '../../styles/Hero/Hero.module.css';
import Image from 'next/image';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import P from '../fonts/P';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import RoundedButton from '../buttons/roundedButton';
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
import Link from 'next/link';


export default function HomeAdSlider({ color1, color2, imageUrl, headerText, subText, imageFocus, scale, totalElements, currentIndex, callBack, link }) {
    const gradient = `linear-gradient(${color1},${color2}, transparent)`;

    // Create an array with 'totalElements' number of elements
    const pillsArray = Array.from({ length: totalElements }, (_, index) => (
        <div
            key={index}
            className={`${styles.pillAd} ${currentIndex === index ? styles.pillAdSelected : ''}`}
            onClick={() => callBack(index)}
        />
    ));


    return (
        <>
            <div className={styles.containerHeroAdSlider}>
                <div className={styles.centerModuleHeroAd}>
                    <div className={styles.bottomSpacer}>
                        <H1 text={headerText} color={theme.colors.WHITE} />
                    </div>
                    <P text={subText} color={theme.colors.WHITE} />
                    <div className="generalCenterPadding">
                        <Link href={link}>
                            <Grid xs={12} md={12} paddingTop="2.5em" display="flex" justifyContent="center" alignItems="center">
                                <RoundedButton text='learn more' passedStyle={passedStyle.dollarButton} />
                            </Grid>
                        </Link>
                    </div>
                    <div className={styles.hBoxPill}>
                        {pillsArray}
                    </div>
                </div>
                <div className={styles.gradientOverlay} style={{ backgroundImage: gradient }} />
                <div className={styles.imageContainer}>
                    <Image
                        src={imageUrl}
                        className={styles.image}
                        alt="Background"
                        width={1440}
                        height={1471}
                        quality={100}
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
