import React, { useState, useEffect } from 'react';
import styles from '../../styles/Donate/Donate.module.css';
import H2 from '../fonts/H2';
import theme from '../../styles/theme';
import AllPaymentProviderSmall from '../buttons/allPaymentProviderSmall';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import TITLE from '../fonts/TITLE';
import CreditCard from '../inputs/creditCard';
import CreditCardForm from './creditCardForm';
import Payment from './Payment';
import PayPalDonateButton from '../buttons/paypalDonateButton';

export default function EnterPaymentDetailsSection({ ccNumber, expiration, cvv, setccNumber, ccNumberValid, selectedPaymentOption, setSelectedPaymentOption, setExpiration, expirationValid, setCvv, cvvValid, setreoccuringSelected, reoccuringSelected, setfeeOptIn, feeOptIn, stripeFeeAmount, totalAmount, firstName, lastName, email, fund }) {
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
            <Grid container >
                {selectedPaymentOption == 'credit card' ? (

                    <CreditCardForm
                        ccNumber={ccNumber}
                        setccNumber={setccNumber}
                        ccNumberValid={ccNumberValid}
                        expiration={expiration}
                        setExpiration={setExpiration}
                        expirationValid={expirationValid}
                        cvv={cvv}
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
                {selectedPaymentOption == 'apple pay' ? (
                    <Grid xs={12} md={12}>
                        <Payment
                            totalAmount={totalAmount}
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            selectedPaymentOption={selectedPaymentOption}
                            reoccuringSelected={reoccuringSelected}
                            fund={fund}
                        />
                    </Grid>
                ) : (
                    <></>
                )}
                {selectedPaymentOption == 'paypal' ? (
                    <Grid xs={12} md={12}>
                        <PayPalDonateButton totalAmount={totalAmount} />
                    </Grid>
                ) : (
                    <></>
                )}
            </Grid>
        </div>
    )
}
