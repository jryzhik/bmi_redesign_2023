import React from 'react';
import styles from '../../styles/Hero/Hero.module.css';
import Image from 'next/image';


export default function NoTextHero({ color1, color2, imageUrl, headerText, subText, imageFocus, scale, totalElements, currentIndex, callBack }) {
    const gradient = `linear-gradient(${color1},${color2}, transparent)`;
    return (
        <>
            <div className={styles.containerNoText}>
                <div className={styles.gradientOverlayHands} style={{ backgroundImage: gradient }} />
                <div className={styles.imageContainer}>
                    <Image
                        src={imageUrl}
                        alt="Background"
                        width={1440}
                        height={1471}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                            objectPosition: imageFocus,
                            // Adjust the position to focus on the desired part of the image
                            position: 'absolute',
                            width: "100%",
                            height: "100%",
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
