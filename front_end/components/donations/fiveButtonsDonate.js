import React from 'react'
import styles from '../../styles/Donate/ColorDonate.module.css';
import RoundedButton from '../buttons/roundedButton';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function FiveButtonsDonate({buttonStyle}) {
    return (
        <div className={styles.boxConstraint}>
            <Grid container spacing={1.5} minHeight={160}>
                <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
                    <RoundedButton text='$25' passedStyle={buttonStyle} />
                </Grid>
                <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
                    <RoundedButton text='$50' passedStyle={buttonStyle} />
                </Grid>
                <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
                    <RoundedButton text='$100' passedStyle={buttonStyle} />
                </Grid>
                <Grid xs={6} md={2.4} display="flex" justifyContent="center" alignItems="center">
                    <RoundedButton text='$250' passedStyle={buttonStyle} />
                </Grid>
                <Grid xs={12} md={2.4} display="flex" justifyContent="center" alignItems="center">
                    <RoundedButton text='custom' passedStyle={buttonStyle} />
                </Grid>
            </Grid>
        </div>
    )
}
