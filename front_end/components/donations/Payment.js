import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import Grid from '@mui/material/Unstable_Grid2';
import RoundedButton from "../buttons/roundedButton";
import SubmitButton from "../buttons/submitButton";
import passedStyle from '../../styles/Donate/ColorDonate.module.css';

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [elementViewForm, setElementViewForm] = useState({ display: "block" });
  const [elementViewOver, setElementViewOver] = useState({ display: "none" });
  const [ready, setReady] = useState(true)

  function hidePaymentShowOverview() {
    if (ready) {
      setElementViewForm({ display: "none" })
      setElementViewOver({ display: "block"})
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
      body: JSON.stringify({}),
    }).then(async (result) => {
      const { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      {clientSecret && stripePromise && (
        <div style={elementViewForm}>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm 
              setReady={setReady}
            />
          </Elements>
          <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingTop={4}>
            <RoundedButton text="Overview" passedStyle={passedStyle.dollarButtonBlack} callBackFunction={hidePaymentShowOverview} />
          </Grid>
        </div>
      )}
      <div style={elementViewOver}>
        <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingTop={4}>
          <SubmitButton />
        </Grid>
      </div>
    </>
  );
}

export default Payment;
