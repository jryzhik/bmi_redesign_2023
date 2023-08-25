import { React, useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import styles from '../../styles/Donate/Donate.module.css';
import ThankyouSection from '../donations/thankyouSection';

export default function PayPalDonateButton({ totalAmount, fund }) {
    const [paymentSuccess, setPaymentSuccess] = useState(false)
    const [paymentVisible, setPaymentVisible] = useState({ display: "grid" })
    const [thanksVisible, setThanksVisible] = useState({ display: "none" })

    useEffect(() => {
        if (paymentSuccess) {
            setPaymentVisible({ display: "none" })
            setThanksVisible({ display: "grid" })
        }
    }, [paymentSuccess])

    const FUNDING_SOURCES = [
        FUNDING.PAYPAL,
        // FUNDING.VENMO,
    ];

    const initialOptions = {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        "enable-funding": "venmo",
    };

    return (
        <div className={styles.paypalbutton}>
            <PayPalScriptProvider options={initialOptions}>
                {FUNDING_SOURCES.map(fundingSource => (
                    <>
                        <div style={paymentVisible}>
                            <PayPalButtons
                                fundingSource={fundingSource}
                                key={fundingSource}
                                style={{
                                    layout: 'vertical',
                                    shape: 'pill',
                                    color: (fundingSource === FUNDING.PAYLATER) ? 'gold' : '',
                                }}
                                createOrder={async (data, actions) => {
                                    try {
                                        const response = await fetch("/api/paypal", {  // Use the same endpoint for both create and capture
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({ action: 'create-order', number: totalAmount, fund: fund }),
                                        });

                                        const details = await response.json();
                                        return details.id;
                                    } catch (error) {
                                        console.error(error);
                                    }
                                }}

                                onApprove={async (data, actions) => {
                                    try {
                                        const response = await fetch(`/api/paypal?orderID=${data.orderID}`, {  // Use query parameter for capture
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({ action: 'capture-order' }),
                                        });

                                        const details = await response.json();
                                        const transaction = details.purchase_units[0].payments.captures[0];
                                        if (transaction.status == 'COMPLETED') {
                                            setPaymentSuccess(true)
                                            console.log("We have succeded")
                                        }
                                        // Handle success or error based on the response
                                        // ...
                                    } catch (error) {
                                        console.error(error);
                                    }
                                }}
                            />
                        </div>
                        <div style={thanksVisible}>
                            <ThankyouSection fund={fund.split(" ")[0]} />
                        </div>
                    </>
                ))}
            </PayPalScriptProvider>
        </div>
    );
}