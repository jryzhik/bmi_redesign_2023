import React from 'react';
import styles from '../../styles/Hero/Hero.module.css';
import Image from 'next/image';

export default function ImageNGradient({ color1, color2, imageUrlTop, imageUrlBottom, content, style_containerTop, style_imgTop, style_containerBottom, style_imgBottom }) {
    const gradient = `linear-gradient(to bottom, transparent 0, ${color1} 10em, ${color2} calc(100% - 15em), transparent 100%)`;
    return (
        <div className={style_containerTop}>
            <Image
                priority
                className={style_imgTop}
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
            <div className={style_containerBottom}>
                <Image
                    priority={false}
                    className={style_imgBottom}
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
