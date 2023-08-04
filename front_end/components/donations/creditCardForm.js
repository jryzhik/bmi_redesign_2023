import React, { useState, useEffect } from 'react';
import theme from '../../styles/theme';
import AllPaymentProviderSmall from '../buttons/allPaymentProviderSmall';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import TITLE from '../fonts/TITLE';
import CreditCard from '../inputs/creditCard';

export default function CreditCardForm({ setccNumber, ccNumberValid }) {
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
        <>
            <Grid xs={12} md={12} display="flex" justifyContent="left" alignItems="center" paddingLeft={2} paddingBottom={1}>
                <TITLE color={cardNumberLabelColor} text={cardNumberLabel} />
            </Grid>
            <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingRight={0.5}>
                <CreditCard
                    placeholder="xxxx - xxxx - xxxx - xxxx"
                    borderColor={theme.colors.GREY}
                    textColor={theme.colors.BLACK}
                    type="creditcard"
                    callBack={changeColorNText}
                    pattern="[0-9]*"
                    setccNumber={setccNumber}
                />
            </Grid>
        </>
    )
}
