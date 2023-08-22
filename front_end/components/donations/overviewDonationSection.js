import React from 'react'
import styles from '../../styles/Donate/Donate.module.css';
import H1 from '../fonts/H1';
import theme from '../../styles/theme';
import H4 from '../fonts/H4';
import FIELDTEXT from '../fonts/FIELDTEXT';
import TITLE from '../fonts/TITLE';
import CcCardOverview from './ccCardOverview';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import RadioButton from '../buttons/radioButton';
import ST from '../fonts/ST';
import H2 from '../fonts/H2';
import AmountEnter from '../inputs/amountEnter';

export default function OverviewDonationSection({ setCustomDollarValue, totalAmount, firstName, lastName, email, selectedPaymentOption, reoccuringSelected, setfeeOptIn, setreoccuringSelected, feeOptIn, stripeFeeAmount }) {
    return (
        <div className={styles.overviewDonationSection}>
            <div style={{ display: "flex", justifyContent: 'center', width: "42em", paddingTop: "3em", paddingBottom: "3em" }}>
                <AmountEnter totalAmount={totalAmount} setCustomDollarValue={setCustomDollarValue} offset={115}/>
                {/* <H1 color={theme.colors.BLACK} text={`$${totalAmount}`} /> */}

            </div>

            <Grid xs={12} md={12} display="flex" flexDirection= "column" justifyContent="end" alignItems="start" alignSelf="start" gap={"2em"} paddingLeft={"3em"} paddingBottom={"2em"}>
                {/* <div style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
                    <TITLE color={theme.colors.BLACK} text={"Reoccurring donation"} />
                    <div style={{ display: 'flex', gap: ".5em" }}>
                        <RadioButton
                            callBack={setreoccuringSelected}
                            valueSelected={reoccuringSelected} />
                        <FIELDTEXT color={theme.colors.BLACK} text="Make this a monthly donation" />
                    </div>
                </div> */}
                <div style={{ display: "flex", flexDirection: "column", gap: ".5em"}}>
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

        </div>
    )
}