import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import MobilePaymentProviderButton from '../buttons/mobilePaymentProviderButton';
import H3 from '../fonts/H3';
import theme from '../../styles/theme';


export default function MobileSelectPaymentSection({ paymentButtonClickHandle }) {
    function zelleHandle() {
        paymentButtonClickHandle('zelle')
        window.open(process.env.NEXT_PUBLIC_ZELLE_LINK, '_blank');
    }
    return (
        <Grid container justifyContent={"center"}>
            <Grid xs={12} md={12} display={"flex"} paddingBottom={3} paddingTop={1} justifyContent={"center"}>
                <H3 color={theme.colors.BLACK} text="Select your donation option" />
            </Grid>
            <Grid xs={12} md={12} display={"flex"} padding={.5} justifyContent={"center"}>
                <MobilePaymentProviderButton
                    imageUrl="/img/icons/apple-pay.svg"
                    width={70}
                    handleClick={() => paymentButtonClickHandle('apple pay')}
                />
            </Grid>
            <Grid xs={12} md={12} display={"flex"} padding={.5} justifyContent={"center"}>
                <MobilePaymentProviderButton
                    imageUrl="/img/icons/zelle.svg"
                    width={70}
                    handleClick={zelleHandle}
                />
            </Grid>
            <Grid xs={12} md={12} display={"flex"} padding={.5} justifyContent={"center"}>
                <MobilePaymentProviderButton
                    imageUrl="/img/icons/paypal.svg"
                    width={80}
                    handleClick={() => paymentButtonClickHandle('paypal')}
                />
            </Grid>
            <Grid xs={12} md={12} display={"flex"} padding={.5} justifyContent={"center"}>
                <MobilePaymentProviderButton
                    imageUrl="/img/icons/venmo.svg"
                    width={75}
                    handleClick={() => paymentButtonClickHandle('venmo')}
                />
            </Grid>
            <Grid xs={12} md={12} display={"flex"} padding={.5} justifyContent={"center"}>
                <MobilePaymentProviderButton
                    imageUrl="/img/icons/cashapp.svg"
                    width={100}
                    handleClick={() => paymentButtonClickHandle('cashapp')}
                />
            </Grid>
            <Grid xs={12} md={12} display={"flex"} padding={.5} justifyContent={"center"}>
                <MobilePaymentProviderButton
                    imageUrl="/img/icons/creditCard.svg"
                    width={100}
                    handleClick={() => paymentButtonClickHandle('credit card')}
                />
            </Grid>
        </Grid>
    )
}
