import React, { useState, useEffect } from 'react';
import styles from '../../styles/Donate/Donate.module.css';
import H2 from '../fonts/H2';
import theme from '../../styles/theme';
import AllPaymentProviderSmall from '../buttons/allPaymentProviderSmall';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import TITLE from '../fonts/TITLE';
import CreditCard from '../inputs/creditCard';
import CreditCardForm from './creditCardForm';

export default function EnterPaymentDetailsSection({ setccNumber, ccNumberValid, selectedPaymentOption, setSelectedPaymentOption, setExpiration, expirationValid, setCvv, cvvValid, setreoccuringSelected, reoccuringSelected, setfeeOptIn, feeOptIn, stripeFeeAmount }) {
    const [cardNumberLabel, setcardNumberLabel] = useState('card number');
    const [cardNumberLabelColor, setcardNumberLabelColor] = useState(theme.colors.BLACK);

    // Define the changeColorNText function outside the useEffect hook
    function changeColorNText() {
        console.log(ccNumberValid);
        if (ccNumberValid) {
            setcardNumberLabel('card number');
            setcardNumberLabelColor(theme.colors.BLACK);
        } else {
            setcardNumberLabel('please enter a valid card number');
            setcardNumberLabelColor(theme.colors.RED);
        }
    }

    // Call the function immediately when the component mounts and whenever ccNumberValid changes
    useEffect(() => {
        changeColorNText();
    }, [ccNumberValid]);
    return (
        <div className={styles.enterPaymentDetailsSection}>
            <H2 color={theme.colors.BLACK} text="Enter your payment details." />
            <Grid container >
                <Grid xs={12} md={12} paddingLeft={2} paddingTop={"2.6em"}>
                    <TITLE color={theme.colors.BLACK} text={"Payment Option"} />
                </Grid>
                <Grid xs={12} md={12} paddingTop={1} paddingBottom={"2.6em"}>
                    <AllPaymentProviderSmall
                        selectedPaymentOption = {selectedPaymentOption}
                        setSelectedPaymentOption = {setSelectedPaymentOption}
                    />
                </Grid>
                {selectedPaymentOption == 'cc' ? (
                    <CreditCardForm
                        setccNumber={setccNumber}
                        ccNumberValid={ccNumberValid}
                        setExpiration={setExpiration}
                        expirationValid={expirationValid}
                        setCvv={setCvv}
                        cvvValid={cvvValid}
                        feeAmount={stripeFeeAmount}
                        setreoccuringSelected={setreoccuringSelected}
                        reoccuringSelected={reoccuringSelected}
                        setfeeOptIn={setfeeOptIn}
                        feeOptIn={feeOptIn}
                    />
                ) : (
                    <></>
                )}
            </Grid>
        </div>
    )
}
