import React from 'react'
import styles from '../../styles/Hero/Hero.module.css';
import Image from 'next/image';
import PageParentText from './pageParentText';
import theme from '../../styles/theme'
import H1 from '../fonts/H1';
import P from '../fonts/P';


export default function ImageNtext({ color1, color2, imageUrl, textParent, textChild, headerText, subText }) {
    const gradient = `linear-gradient(${color1},${color2}, transparent)`;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.centerModule}>
                    <PageParentText
                        textParent={textParent}
                        textChild={textChild}
                        color={theme.colors.WHITE}
                    />
                    <H1 text={headerText} color={theme.colors.WHITE} />
                    <P text={subText} color={theme.colors.WHITE} />
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