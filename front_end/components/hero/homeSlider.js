import React from 'react';
import styles from '../../styles/Hero/Hero.module.css';
import Image from 'next/image';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import P from '../fonts/P';
import TITLE from '../fonts/TITLE';
import ST from '../fonts/ST';

export default function HomeSlider({ color1, color2, imageUrl, headerText, subText, imageFocus, scale, totalElements, currentIndex, callBack }) {
    const gradient = `linear-gradient(${color1},${color2}, transparent)`;

    // Create an array with 'totalElements' number of elements
    const pillsArray = Array.from({ length: totalElements }, (_, index) => (
        <div
            key={index}
            className={`${styles.pill} ${currentIndex === index ? styles.pillSelected : ''}`}
            onClick={() => callBack(index)}
        />
    ));
    

    return (
        <>
            <div className={styles.containerHeroSlider}>
                <div className={styles.centerModule}>
                    <div className={styles.hBox}>
                        <TITLE text="Byelorussian" color={theme.colors.WHITE} />
                        <ST text="Mission" color={theme.colors.WHITE} />
                    </div>
                    <div className={styles.bottomSpacer}>
                        <H1 text={headerText} color={theme.colors.WHITE} />
                    </div>
                    <P text={subText} color={theme.colors.WHITE}/>
                    <div className={styles.hBoxPill}>
                        {pillsArray}
                    </div>
                </div>
                <div className={styles.gradientOverlay} style={{ backgroundImage: gradient }} />
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
                            priority: true,
                        }}
                    />
                </div>
            </div>
        </>
    );
}
