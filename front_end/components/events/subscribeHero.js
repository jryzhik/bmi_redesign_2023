import React from 'react'
import styles from '../../styles/Events/Events.module.css';
import P from '../fonts/P';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
import OutlineButton from '../inputs/outlineButton';
import RoundedButton from '../buttons/roundedButton';

export default function SubscribeHero({ color, primaryText, secondaryText }) {
    return (
        <div id='formSection' className={styles.together}>
            <div className={styles.rectangleRounded}></div>
            <div style={{
                backgroundColor: color
            }} className={styles.containerSubscribe}>
                <div className={styles.headerNdescription}>
                    <H1 text={primaryText} color={theme.colors.WHITE} />
                    <P color={theme.colors.WHITE} text={secondaryText} />
                </div>
                <div className={styles.boxConstraint}>
                    <Grid container gap={2}>
                        <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                            <OutlineButton
                                placeholder='Email Address'
                                borderColor={theme.colors.SNOW}
                                textColor={theme.colors.WHITE}
                                type='email'
                            />
                        </Grid>
                        <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                            <RoundedButton text='register' passedStyle={passedStyle.dollarButton} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}