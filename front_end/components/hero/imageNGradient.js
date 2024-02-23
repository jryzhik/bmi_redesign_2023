import React from 'react';
import styles from '../../styles/Hero/Hero.module.css';
import Image from 'next/image';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import P from '../fonts/P';
import TITLE from '../fonts/TITLE';
import PageParentText from './pageParentText';


export default function ImageNGradient({ color1, color2, imageUrlTop, imageUrlBottom, textParent, textChild, headerText, subText, imageFocus, scale1, scale2, content }) {
    const gradient = `linear-gradient(to bottom, transparent 0, ${color1} 10em, ${color2} calc(100% - 15em), transparent 100%)`;
    return (
        <div className={styles.imageContainerGradientBrest}>
            <Image
                className={styles.mainImageBrest}
                src={imageUrlTop}
                alt="Background"
                width={1440}
                height={1081}
                quality={100}
                style={{
                    objectFit: 'contain',
                    // objectPosition: imageFocus,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -100,
                }}
            />
            <div className={styles.gradientOverlayFund} style={{ backgroundImage: gradient }}>
                {content}
            </div>
            <div className={styles.wrapperBottomContainer}>
                <Image
                    className={styles.bottomImgContainerBrest}
                    src={imageUrlBottom}
                    alt="Background"
                    width={1440}
                    height={1081}
                    quality={100}
                    style={{
                        objectFit: 'cover',
                        // objectPosition: '150px 50px', //Desktop
                        width: '100%',
                        height: '100%',
                        // transform: `scale(1.9)`, //Desktop
                        zIndex: -100
                    }}
                />
            </div>
        </div>
    );
}
