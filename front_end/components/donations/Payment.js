import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import Grid from '@mui/material/Unstable_Grid2';
import RoundedButton from "../buttons/roundedButton";
import SubmitButton from "../buttons/submitButton";
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
import OverviewDonationSection from "./overviewDonationSection";
import AddressForm from "./addressForm";


function Payment({ totalAmount, firstName, lastName, email, selectedPaymentOption, reoccuringSelected, setHeaderText }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const [ready, setReady] = useState(false)

  const [addressVisible, setAddressVisible] = useState({ display: "grid" })
  const [paymentVisible, setPaymentVisible] = useState({ display: "none" })

  const loader = 'auto';

  function setViewablePapa() {
    if (ready) {
      setAddressVisible({ display: "none" })
      setPaymentVisible({ display: "grid" })
    }
  }
  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {

    fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Set the content type to JSON
      },
      body: JSON.stringify({number: totalAmount * 100}),
    })
      .then(async (result) => {
        const { clientSecret } = await result.json();
        setClientSecret(clientSecret);
      })
      .catch((error) => {
        console.error("Error fetching client secret:", error);
      });
  }, []);

  return (
    <>
      {clientSecret && stripePromise && (
        <div style={{ paddingTop: "3em" }}>
          <Elements stripe={stripePromise} options={{ clientSecret, loader }}>
            <div style={addressVisible}>
              <AddressForm setReady={setReady} />
              <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingTop={4}>
                <RoundedButton text="next" passedStyle={passedStyle.dollarButtonBlack} callBackFunction={setViewablePapa} />
              </Grid>
            </div>
            <div style={paymentVisible}>
              <CheckoutForm />
              <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingTop={4}>
                <SubmitButton />
              </Grid>
            </div>

          </Elements>
        </div>
      )}
    </>
  );
}

export default Payment;
