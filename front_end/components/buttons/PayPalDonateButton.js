import React from 'react';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import styles from '../../styles/Donate/Donate.module.css';

function PayPalDonateButton({ totalAmount }) {
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
                {
                    FUNDING_SOURCES.map(fundingSource => {
                        return (
                            <PayPalButtons
                                fundingSource={fundingSource}
                                key={fundingSource}
                                style={{
                                    layout: 'vertical', // or horizontal
                                    shape: 'pill',
                                    color: (fundingSource === FUNDING.PAYLATER) ? 'gold' : '',
                                }}
                                createOrder={async (data, actions) => {
                                    try {
                                        const response = await fetch("http://localhost:5252/paypal/orders", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json" // Set the content type to JSON
                                            },
                                            body: JSON.stringify({ number: totalAmount }),
                                        });

                                        const details = await response.json();
                                        return details.id;
                                    } catch (error) {
                                        console.error(error);
                                        // Handle the error or display an appropriate error message to the user
                                    }
                                }}

                                onApprove={async (data, actions) => {
                                    try {
                                        const response = await fetch(`http://localhost:5252/paypal/orders/${data.orderID}/capture`, {
                                            method: "POST"
                                        });

                                        const details = await response.json();
                                        // Three cases to handle:
                                        //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                                        //   (2) Other non-recoverable errors -> Show a failure message
                                        //   (3) Successful transaction -> Show confirmation or thank you message

                                        // This example reads a v2/checkout/orders capture response, propagated from the server
                                        // You could use a different API or structure for your 'orderData'
                                        const errorDetail = Array.isArray(details.details) && details.details[0];

                                        if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                                            return actions.restart();
                                            // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                                        }

                                        if (errorDetail) {
                                            let msg = 'Sorry, your transaction could not be processed.';
                                            msg += errorDetail.description ? ' ' + errorDetail.description : '';
                                            msg += details.debug_id ? ' (' + details.debug_id + ')' : '';
                                            alert(msg);
                                        }

                                        // Successful capture! For demo purposes:
                                        console.log('Capture result', details, JSON.stringify(details, null, 2));
                                        const transaction = details.purchase_units[0].payments.captures[0];
                                        alert('Transaction ' + transaction.status + ': ' + transaction.id + '. See console for all available details');
                                    } catch (error) {
                                        console.error(error);
                                        // Handle the error or display an appropriate error message to the user
                                    }
                                }}
                            />)
                    })
                }
            </PayPalScriptProvider>
        </div>
    );
}

export default PayPalDonateButton;