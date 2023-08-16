import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Payment from './Payment';
import PayPalDonateButton from '../buttons/PayPalDonateButton';
import H3 from '../fonts/H3';
import theme from '../../styles/theme';
import VenmoButton from '../buttons/VenmoButton';

export default function MobileEnterPaymentDetailsSection({ selectedPaymentOption, totalAmount, firstName, lastName, email, fund }) {
    return (
        <Grid container >
            {selectedPaymentOption === 'apple pay' || selectedPaymentOption === 'cashapp' || selectedPaymentOption === 'credit card' ? (
                <Grid xs={12} md={12} paddingTop={3}>
                    <Payment
                        totalAmount={totalAmount}
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        selectedPaymentOption={selectedPaymentOption}
                        fund={fund}
                    />
                </Grid>
            ) : (
                <></>
            )}
            {selectedPaymentOption == 'paypal' ? (
                <Grid xs={12} md={12} paddingTop={10} display="flex" flexDirection="column" gap={3}>
                    <H3 color={theme.colors.BLACK} text="Please click on PayPal" />
                    <PayPalDonateButton totalAmount={totalAmount} fund={fund} />
                </Grid>
            ) : (
                <></>
            )}
            {selectedPaymentOption == 'venmo' ? (
                <Grid xs={12} md={12} paddingTop={10} display="flex" flexDirection="column" gap={3}>
                    <H3 color={theme.colors.BLACK} text="Please click on Venmo" />
                    <VenmoButton totalAmount={totalAmount} fund={fund} />
                </Grid>
            ) : (
                <></>
            )}
            {selectedPaymentOption == 'zelle' ? (
                <Grid xs={12} md={12} paddingTop={6}>
                    <H3 color={theme.colors.BLACK} text="Please follow all directions through seperate zelle window"/>
                </Grid>
            ) : (
                <></>
            )}
        </Grid>
    );
}
