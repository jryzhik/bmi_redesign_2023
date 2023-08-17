import React from 'react'
import ST from '../fonts/ST';
import theme from '../../styles/theme';
import TITLE from '../fonts/TITLE';
import AmountEnter from '../inputs/amountEnter';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import RadioButton from '../buttons/radioButton';
import FIELDTEXT from '../fonts/FIELDTEXT';
import RoundedButton from '../buttons/roundedButton';
import passedStyle from '../../styles/Donate/ColorDonate.module.css';

export default function MobileOverviewDonationSection({totalAmount, setCustomDollarValue, setreoccuringSelected, reoccuringSelected, setfeeOptIn, feeOptIn, stripeFeeAmount, currentScreenIndex, nextPageNValidate }) {
    return (
        <>
            <div style={{ display: "flex", justifyContent: 'center', paddingTop: "3em", paddingBottom: "3em" }}>
                <AmountEnter totalAmount={totalAmount} setCustomDollarValue={setCustomDollarValue} offset={145} />
            </div>
            <Grid container gap={1} justifyContent={"center"}>
                <Grid xs={12} padding={1} width={"70%"}>
                    <div style={{ display: "flex", flexDirection: "column", gap: ".5em", position: "relative" }}>
                        <TITLE color={theme.colors.BLACK} text={"Reoccurring donation"} />
                        <div style={{ display: 'flex', gap: ".5em" }}>
                            <RadioButton
                                callBack={setreoccuringSelected}
                                valueSelected={reoccuringSelected} />
                            <FIELDTEXT color={theme.colors.BLACK} text="Make this a monthly donation" />
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} padding={1} width={"70%"}>
                    <div style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
                        <TITLE color={theme.colors.BLACK} text={"Processing fee"} />
                        <div style={{ display: 'flex', gap: ".5em" }}>
                            <RadioButton
                                callBack={setfeeOptIn}
                                valueSelected={feeOptIn}
                            />
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <FIELDTEXT color={theme.colors.BLACK} text={`Add $${stripeFeeAmount} to cover processing fee`} />
                                <ST color={theme.colors.CHARCOAL} text="*Required with AMEX" />
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingTop={4} paddingBottom={3} width={"70%"}>
                    <RoundedButton text={currentScreenIndex === 3 ? "overview" : currentScreenIndex === 4 ? "give" : currentScreenIndex === 5 ? "close" : "continue to payment"} passedStyle={passedStyle.dollarButtonBlack} callBackFunction={nextPageNValidate} />
                </Grid>
            </Grid>
        </>
    )
}
