import React from 'react';
import styles from '../../styles/Hero/Hero.module.css';
import Image from 'next/image';
import H1 from '../fonts/H1';
import P from '../fonts/P';
import PageParentText from './pageParentText';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import RoundedButton from '../buttons/roundedButton';
import passedStyle from '../../styles/Donate/ColorDonate.module.css';

export default function ImageNDonate({ color1, color2, imageUrl, textParent, headerText, subText, textChild, textColor, bottomBool }) {
    const gradient = `linear-gradient(transparent,${color1},${color2})`;
    return (
        <>
            <div className={styles.container}>

                <div className={styles.centerModuleTrip}>
                    <PageParentText textParent={textParent} textChild={textChild} color={textColor} />
                    <div className={styles.bottomSpacer}>
                        <H1 text={headerText} color={textColor} />
                    </div>
                    <P text={subText} color={textColor} />
                    <div className="generalCenterPadding">
                        <Grid xs={12} md={12} paddingTop="2.5em" display="flex" justifyContent="center" alignItems="center">
                            <RoundedButton text='donate' passedStyle={passedStyle.dollarButtonBlack} />
                        </Grid>
                    </div>
                </div>
                <div className={styles.gradientOverlaySearch} style={{ backgroundImage: gradient }} />
                <div className={styles.imageContainer}>
                    <Image
                        src={imageUrl}
                        className={styles.imageSearch}
                        alt="Background"
                        width={1440}
                        height={1081}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center 36%',
                            // Adjust the position to focus on the desired part of the image
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: -100,
                            borderBottomLeftRadius: '7px',
                            borderBottomRightRadius: '7px',
                            transform: `scale(1.1)`,
                        }}
                    />
                </div>
            </div>
        </>
    );
}
