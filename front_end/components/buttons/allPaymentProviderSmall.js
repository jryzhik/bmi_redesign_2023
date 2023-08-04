import React, { useState, useEffect } from 'react';
import PaymentProviderButtonSmall from './paymentProviderButtonSmall';
import styles from '../../styles/Donate/Donate.module.css';
import Image from 'next/image';

export default function AllPaymentProviderSmall({ selectedPaymentOption }) {
  const [applePaySelected, setapplePaySelected] = useState(styles.paymentButtonSmall);
  const [zelleSelected, setZelleSelected] = useState(styles.paymentButtonSmall);
  const [paypalSelected, setpaypalSelected] = useState(styles.paymentButtonSmall);
  const [venmoSelected, setvenmoSelected] = useState(styles.paymentButtonSmall);
  const [cashAppSelected, setCashAppSelected] = useState(styles.paymentButtonSmall);
  const [ccSelected, setCcSelected] = useState(styles.creditCardText);

  useEffect(() => {
    switch (selectedPaymentOption) {
      case 'applepay':
        setapplePaySelected(styles.paymentButtonSmallSelected);
        break;
      case 'zelle':
        setZelleSelected(styles.paymentButtonSmallSelected);
        break;
      case 'paypal':
        setpaypalSelected(styles.paymentButtonSmallSelected);
        break;
      case 'venmo':
        setvenmoSelected(styles.paymentButtonSmallSelected);
        break;
      case 'cashapp':
        setCashAppSelected(styles.paymentButtonSmallSelected);
        break;
      case 'cc':
        setCcSelected(styles.creditCardTextSelected);
        break;
      default:
        // Handle other cases if needed
        break;
    }
  }, [selectedPaymentOption]);

  return (
    <div style={{
      display: "flex",
      gap: ".2em"
    }}>
      <PaymentProviderButtonSmall
        imageUrl="/img/icons/apple-pay.svg"
        width={28}
        passedStyle={applePaySelected}
      />
      <PaymentProviderButtonSmall
        imageUrl="/img/icons/zelle.svg"
        width={28}
        passedStyle={zelleSelected}
      />
      <PaymentProviderButtonSmall
        imageUrl="/img/icons/paypal.svg"
        width={33}
        passedStyle={paypalSelected}
      />
      <PaymentProviderButtonSmall
        imageUrl="/img/icons/venmo.svg"
        width={29}
        passedStyle={venmoSelected}
      />
      <PaymentProviderButtonSmall
        imageUrl="/img/icons/cashapp.svg"
        width={50}
        passedStyle={cashAppSelected}
      />
      <div className={ccSelected}>
        <Image
          src="img/icons/creditCard.svg"
          alt="button"
          width={82}
          height={13}
          quality={100}
        />
      </div>
    </div>
  );
}
