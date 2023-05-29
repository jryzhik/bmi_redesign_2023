import React from 'react'
import styles from '../../styles/Events/Events.module.css';
import P from '../fonts/P';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import DollarButton from '../buttons/roundedButton';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Link from 'next/link';
import passedStyle from '../../styles/Donate/ColorDonate.module.css';




export default function RegisterButtonHero({ color, primaryText, secondaryText }) {
    return (
        <div className={styles.together}>
            <div className={styles.rectangleRounded}></div>
            <div style={{
                backgroundColor: color
            }} className={styles.containerRegister}>
                <div className={styles.headerNdescription}>
                    <H1 text={primaryText} color={theme.colors.WHITE} />
                    <P color={theme.colors.WHITE} text={secondaryText} />
                </div>
                <div className={styles.boxConstraint}>
                    <Link href='/trip#formSection'>
                        <Grid container>
                            <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                                <DollarButton text='register' passedStyle={passedStyle.dollarButton}/>
                            </Grid>
                        </Grid>
                    </Link>
                </div>
            </div>
        </div>
    )
}