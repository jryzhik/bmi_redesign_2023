import React from 'react'
import styles from '../../styles/Donate/ColorDonate.module.css';
import P from '../fonts/P';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import DollarButton from '../buttons/dollarButton';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function ColorheroDonate({color, primaryText, secondaryText}) {
    return (
        <>
            <div className={styles.rectangleRounded}></div>
            <div style={{
                        backgroundColor: color
                    }} className={styles.container}>
                <div className={styles.headerNdescription}>
                    <H1 text={primaryText} color={theme.colors.WHITE} />
                    <P color={theme.colors.WHITE} text={secondaryText} />
                </div>
                <div className={styles.boxConstraint}>
                    <Grid container spacing={1.5} minHeight={160}>
                        <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
                            <DollarButton text='$25' />
                        </Grid>
                        <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
                            <DollarButton text='$50' />
                        </Grid>
                        <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
                            <DollarButton text='$100' />
                        </Grid>
                        <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
                            <DollarButton text='$250' />
                        </Grid>
                        <Grid xs={12} md={2.4} display="flex" justifyContent="center" alignItems="center">
                            <DollarButton text='custom' />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}