import React from 'react'
import styles from '../../styles/Donate/ColorDonate.module.css';
import P from '../fonts/P';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import RoundedButton from '../buttons/roundedButton';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import FiveButtonsDonate from './FiveButtonsDonate';

export default function ColorheroDonate({color, primaryText, secondaryText}) {
    return (
        <div className={styles.together}>
            <div className={styles.rectangleRounded}></div>
            <div style={{
                        backgroundColor: color
                    }} className={styles.container}>
                <div className={styles.headerNdescription}>
                    <H1 text={primaryText} color={theme.colors.WHITE} />
                    <P color={theme.colors.WHITE} text={secondaryText} />
                </div>
                <FiveButtonsDonate
                    buttonStyle={styles.dollarButton}
                />
            </div>
        </div>
    )
}