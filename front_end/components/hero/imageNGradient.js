import React from 'react';
import styles from '../../styles/Hero/Hero.module.css';
import Image from 'next/image';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import P from '../fonts/P';
import TITLE from '../fonts/TITLE';
import PageParentText from './pageParentText';


export default function ImageNGradient({ color1, color2, imageUrlTop, imageUrlBottom, textParent, textChild, headerText, subText, imageFocus, scale }) {
    const gradient = `linear-gradient(transparent,${color1},${color1},${color2})`;
    return (
        <>
            <div className={styles.containerGradient}>
                <div className={styles.centerModuleFund}>
                    <PageParentText textParent={textParent} textChild={textChild} color={theme.colors.WHITE} />
                    <div className={styles.bottomSpacer}>
                        <H1 text={headerText} color={theme.colors.WHITE} />
                    </div>
                    <P text={subText} color={theme.colors.WHITE} />
                </div>
                <div className={styles.gradientOverlayFund} style={{ backgroundImage: gradient }} />
                <div className={styles.imageContainer}>
                    <Image
                        src={imageUrlTop}
                        className={styles.imageSearch}
                        alt="Background"
                        width={1440}
                        height={1081}
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
                            transform: `scale(${scale})`
                        }}
                    />
                </div>
            </div>
        </>
    );
}
