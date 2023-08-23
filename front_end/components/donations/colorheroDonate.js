import React from 'react'
import styles from '../../styles/Donate/ColorDonate.module.css';
import P from '../fonts/P';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import RoundedButton from '../buttons/roundedButton';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import FiveButtonsDonate from './FiveButtonsDonate';
import DonationMasterForm from './donationMasterForm';
import buttonStyles from '../../styles/Donate/ColorDonate.module.css';


export default function ColorheroDonate({ color, primaryText, secondaryText, fund }) {
    return (
        <div className={styles.together}>
            <div className={styles.rectangleRounded}></div>
            <div style={{
                backgroundColor: color
            }} className={styles.container}>
                <DonationMasterForm
                    headerText={primaryText}
                    secondaryText={secondaryText}
                    secondaryAllign='center'
                    color={theme.colors.WHITE}
                    buttonStyle={buttonStyles.dollarButton}
                    fund={fund}
                />
            </div>
        </div>
    )
}