import React from 'react'
import styles from '../../styles/Donate/Donate.module.css';
import H2 from '../fonts/H2';
import theme from '../../styles/theme';
import AllPaymentProviderSmall from '../buttons/allPaymentProviderSmall';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import TITLE from '../fonts/TITLE';
import OutlineButton from '../inputs/outlineButton';

export default function EnterPaymentDetailsSection() {
    return (
        <div className={styles.enterPaymentDetailsSection}>
            <H2 color={theme.colors.BLACK} text="Enter your payment details." />
            <Grid container >
                <Grid xs={12} md={12} paddingLeft={2} paddingTop={"2.6em"}>
                    <TITLE color={theme.colors.BLACK} text={"Payment Option"} />
                </Grid>
                <Grid xs={12} md={12} paddingTop={1} paddingBottom={"2.6em"}>
                    <AllPaymentProviderSmall />
                </Grid>
                <Grid xs={12} md={12} display="flex" justifyContent="left" alignItems="center" paddingLeft={2} paddingBottom={1}>
                    <TITLE color={theme.colors.BLACK} text={"card number"} />
                </Grid>
                <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingRight={0.5}>
                    <OutlineButton
                        placeholder="xxxx - xxxx - xxxx - xxxx"
                        borderColor={theme.colors.GREY}
                        textColor={theme.colors.BLACK}
                        type="number"
                        callBack={() => console.log("afs")}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
