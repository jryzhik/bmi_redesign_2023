import React, { useState, useEffect } from 'react';
import theme from '../../styles/theme';
import AllPaymentProviderSmall from '../buttons/allPaymentProviderSmall';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import TITLE from '../fonts/TITLE';
import CreditCard from '../inputs/creditCard';
import OutlineButton from '../inputs/outlineButton';
import RadioButton from '../buttons/radioButton';
import FIELDTEXT from '../fonts/FIELDTEXT';
import ST from '../fonts/ST';

export default function CreditCardForm({ ccNumber, expiration, cvv, setccNumber, ccNumberValid, setExpiration, expirationValid, setCvv, cvvValid, feeAmount, setreoccuringSelected, reoccuringSelected, setfeeOptIn, feeOptIn }) {
    const [cardNumberLabel, setcardNumberLabel] = useState('card number');
    const [cardNumberLabelColor, setcardNumberLabelColor] = useState(theme.colors.BLACK);

    const [expirationDateLabel, setExpirationDateLabel] = useState('expiration date');
    const [expirationDateLabelColor, setExpirationDateLabelColor] = useState(theme.colors.BLACK);

    const [cvvLabel, setcvvLabel] = useState('cvv');
    const [cvvLabelColor, setcvvLabelColor] = useState(theme.colors.BLACK);


    // Define the changeColorNText function outside the useEffect hook
    function changeColorNText() {
        if (ccNumberValid) {
            setcardNumberLabel('card number');
            setcardNumberLabelColor(theme.colors.BLACK);
        } else {
            setcardNumberLabel('please enter a valid card number');
            setcardNumberLabelColor(theme.colors.RED);
        }
        if (expirationValid) {
            setExpirationDateLabel('expiration');
            setExpirationDateLabelColor(theme.colors.BLACK);
        } else {
            setExpirationDateLabel('please enter valid date');
            setExpirationDateLabelColor(theme.colors.RED);
        }
        if (cvvValid) {
            setcvvLabel('CVV')
            setcvvLabelColor(theme.colors.BLACK);
        } else {
            setcvvLabel('Please enter valid CVV')
            setcvvLabelColor(theme.colors.RED);
        }

    }

    // Call the function immediately when the component mounts and whenever ccNumberValid changes
    useEffect(() => {
        changeColorNText();
    }, [ccNumberValid]);
    useEffect(() => {
        changeColorNText();
    }, [expirationValid])
    return (
        <>
            <Grid xs={12} md={12} display="flex" justifyContent="left" alignItems="center" paddingLeft={2} paddingBottom={1}>
                <TITLE color={cardNumberLabelColor} text={cardNumberLabel} />
            </Grid>
            <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingRight={0.5} paddingBottom={"1.5em"}>
                <CreditCard
                    placeholder="xxxx - xxxx - xxxx - xxxx"
                    borderColor={theme.colors.GREY}
                    textColor={theme.colors.BLACK}
                    type="creditcard"
                    callBack={changeColorNText}
                    pattern="[0-9]*"
                    setccNumber={setccNumber}
                    value={ccNumber}
                />
            </Grid>
            <Grid xs={6} md={6} display="flex" justifyContent="left" alignItems="center" paddingLeft={2} paddingBottom={1}>
                <TITLE color={expirationDateLabelColor} text={expirationDateLabel} />
            </Grid>
            <Grid xs={6} md={6} display="flex" justifyContent="left" alignItems="center" paddingLeft={2} paddingBottom={1}>
                <TITLE color={cvvLabelColor} text={cvvLabel} />
            </Grid>
            <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center" paddingRight={0.5} paddingBottom={"1.5em"}>
                <OutlineButton
                    placeholder="MM/YY"
                    borderColor={theme.colors.GREY}
                    textColor={theme.colors.BLACK}
                    type="expiration"
                    callBack={setExpiration}
                    additionalFunction={changeColorNText}
                    value={expiration}
                />
            </Grid>
            <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center" paddingRight={0.5} paddingBottom={"1.5em"}>
                <OutlineButton
                    placeholder="XXX"
                    borderColor={theme.colors.GREY}
                    textColor={theme.colors.BLACK}
                    type="cvv"
                    callBack={setCvv}
                    additionalFunction={changeColorNText}
                    maxLength={4}
                    value={cvv}
                />
            </Grid>
            <Grid xs={6} md={6} display="flex" justifyContent="left" alignItems="center" paddingLeft={2} paddingBottom={1}>
                <TITLE color={theme.colors.BLACK} text={"Reoccurring donation"} />
            </Grid>
            <Grid xs={6} md={6} display="flex" justifyContent="left" alignItems="center" paddingLeft={2} paddingBottom={1}>
                <TITLE color={theme.colors.BLACK} text={"Processing fee"} />
            </Grid>
            <Grid xs={6} md={6} display="flex" justifyContent="left" alignItems="start" paddingLeft={2}>
                <div style={{ display: 'flex', gap: ".5em" }}>
                    <RadioButton
                        callBack={setreoccuringSelected}
                        valueSelected={reoccuringSelected} />
                    <FIELDTEXT color={theme.colors.BLACK} text="Make this a monthly donation" />
                </div>
            </Grid>
            <Grid xs={6} md={6} display="flex" justifyContent="left" alignItems="start" paddingLeft={2}>
                <div style={{ display: 'flex', gap: ".5em" }}>
                    <RadioButton
                        callBack={setfeeOptIn}
                        valueSelected={feeOptIn}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <FIELDTEXT color={theme.colors.BLACK} text={`Add $${feeAmount} to cover processing fee`} />
                        <ST color={theme.colors.CHARCOAL} text="*Required with AMEX" />
                    </div>
                </div>
            </Grid>
        </>
    )
}
