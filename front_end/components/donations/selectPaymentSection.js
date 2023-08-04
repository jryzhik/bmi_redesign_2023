import React from 'react'
import styles from '../../styles/Donate/Donate.module.css';
import H2 from '../fonts/H2';
import theme from '../../styles/theme';
import PaymentProviderButton from '../buttons/paymentProviderButton';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function SelectPaymentSection({ paymentButtonClickHandle }) {
    return (
        <div className={styles.selectPaymentSection}>
            <H2 color={theme.colors.BLACK} text="Select your payment option" />
            <div style={{ paddingTop: "5em" }}>
                <Grid container >
                    <Grid xs={4} md={4} padding={1}>
                        <PaymentProviderButton
                            imageUrl="/img/icons/apple-pay.svg"
                            width={100}
                            handleClick={() => paymentButtonClickHandle('applepay')}
                        />
                    </Grid>
                    <Grid xs={4} md={4} padding={1}>
                        <PaymentProviderButton
                            imageUrl="/img/icons/zelle.svg"
                            width={100}
                            handleClick={() => paymentButtonClickHandle('zelle')}
                        />
                    </Grid>
                    <Grid xs={4} md={4} padding={1}>
                        <PaymentProviderButton
                            imageUrl="/img/icons/paypal.svg"
                            width={120}
                            handleClick={() => paymentButtonClickHandle('paypal')}
                        />
                    </Grid>
                    <Grid xs={4} md={4} padding={1}>
                        <PaymentProviderButton
                            imageUrl="/img/icons/venmo.svg"
                            width={100}
                            handleClick={() => paymentButtonClickHandle('venmo')}
                        />
                    </Grid>
                    <Grid xs={4} md={4} padding={1}>
                        <PaymentProviderButton
                            imageUrl="/img/icons/cashapp.svg"
                            width={150}
                            handleClick={() => paymentButtonClickHandle('cashapp')}

                        />
                    </Grid>
                    <Grid xs={4} md={4} padding={1}>
                        <PaymentProviderButton
                            imageUrl="/img/icons/creditInfo.svg"
                            width={150}
                            handleClick={() => paymentButtonClickHandle('cc')}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
