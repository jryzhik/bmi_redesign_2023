import React from 'react';
import styles from '../../styles/Images/Images.module.css';
import Image from 'next/image';
import H2 from '../fonts/H2';
import theme from '../../styles/theme';
import P from '../fonts/P';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import RoundedButton from '../buttons/roundedButton';
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
import Link from 'next/link';



export default function ImageTextButton({ color1, color2, imageUrl, textParent, textChild, headerText, subText, imageFocus, buttonText, link}) {
    const gradient = `linear-gradient(${color1}, ${color2}, transparent)`;

    return (
        <div className={styles.imageTextButtonContainer}>
            <div className={styles.centerModule}>
                <H2 text={headerText} color={theme.colors.WHITE} />
                <P text={subText} color={theme.colors.WHITE} />
                <div className={styles.boxConstraint}>
                    <Link href={link}>
                        <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
                            <RoundedButton text={buttonText} passedStyle={passedStyle.dollarButton} />
                        </Grid>
                    </Link>
                </div>
            </div>
            <div className={styles.imageTextButtonGradientOverlay} style={{ backgroundImage: gradient }} />
            <div className={styles.imageWrapper}>
                <Image
                    src={imageUrl}
                    alt="Background"
                    width={448}
                    height={448}
                    quality={100}
                    style={{
                        objectFit: 'cover',
                        objectPosition: imageFocus,
                        width: '448px',
                        height: '448px',
                        borderRadius: '7px',
                    }}
                />
            </div>
        </div>
    );
}
