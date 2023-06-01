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
        <div className={styles.imageContainerGradient}>
            <Image
                src={imageUrlTop}
                alt="Background"
                width={1440}
                height={1081}
                quality={100}
                style={{
                    objectFit: 'cover',
                    objectPosition: imageFocus,
                    // objectPosition: '-150px -130px',
                    // Adjust the position to focus on the desired part of the image
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -100,
                    transform: `scale(${scale1})`
                }}
            />
            <div className={styles.gradientOverlayFund} style={{ backgroundImage: gradient, marginTop: '23em', marginBottom: '-14em' }}>
                {content}
            </div>
            <div className={styles.bottomImgContainer}>
                <Image
                    src={imageUrlBottom}
                    alt="Background"
                    width={1440}
                    height={1081}
                    quality={100}
                    style={{
                        objectFit: 'cover',
                        // objectPosition: '150px 50px', //Desktop
                        objectPosition: '60px 50px', //Mobile
                        width: '100%',
                        height: '100%',
                        // transform: `scale(1.9)`, //Desktop
                        transform: `scale(${scale2})`,
                        zIndex: -100
                    }}
                />
            </div>
        </div>
    );
}
