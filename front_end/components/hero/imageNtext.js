import React from 'react'
import styles from '../../styles/Hero/Hero.module.css';
import Image from 'next/image';
import PageParentText from './pageParentText';
import theme from '../../styles/theme'


export default function ImageNtext({ color1, color2, imageUrl, textParent, textChild }) {
    const gradient = `linear-gradient(${color1}, ${color2}, transparent)`;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.pageParentText}>
                    <PageParentText
                        textParent={textParent}
                        textChild={textChild}
                        color={theme.colors.WHITE}
                    />
                </div>
                <div className={styles.gradientOverlay} style={{ backgroundImage: gradient }} />
                <Image
                    className={styles.image}
                    src={imageUrl}
                    alt="vision"
                    width={1440}
                    height={1081}
                    quality={100}
                />
            </div>
        </>
    );
}