import React, { useState } from 'react';
import PaymentProviderButtonSmall from './paymentProviderButtonSmall';
import styles from '../../styles/Donate/Donate.module.css';
import Image from 'next/image';

export default function AllPaymentProviderSmall({ selectedPaymentOption, setSelectedPaymentOption }) {

    const handlePaymentOptionSelect = (option) => {
        setSelectedPaymentOption(option);
    };

    return (
        <div style={{
            display: "flex",
            gap: ".2em"
        }}>
            <PaymentProviderButtonSmall
                imageUrl="/img/icons/apple-pay.svg"
                width={28}
                passedStyle={selectedPaymentOption === 'apple pay' ? styles.paymentButtonSmallSelected : styles.paymentButtonSmall}
                handleClick={() => handlePaymentOptionSelect('apple pay')}
            />
            <PaymentProviderButtonSmall
                imageUrl="/img/icons/zelle.svg"
                width={28}
                passedStyle={selectedPaymentOption === 'zelle' ? styles.paymentButtonSmallSelected : styles.paymentButtonSmall}
                handleClick={() => handlePaymentOptionSelect('zelle')}
            />
            <PaymentProviderButtonSmall
                imageUrl="/img/icons/paypal.svg"
                width={33}
                passedStyle={selectedPaymentOption === 'paypal' ? styles.paymentButtonSmallSelected : styles.paymentButtonSmall}
                handleClick={() => handlePaymentOptionSelect('paypal')}
            />
            <PaymentProviderButtonSmall
                imageUrl="/img/icons/venmo.svg"
                width={29}
                passedStyle={selectedPaymentOption === 'venmo' ? styles.paymentButtonSmallSelected : styles.paymentButtonSmall}
                handleClick={() => handlePaymentOptionSelect('venmo')}
            />
            <PaymentProviderButtonSmall
                imageUrl="/img/icons/cashapp.svg"
                width={50}
                passedStyle={selectedPaymentOption === 'cashapp' ? styles.paymentButtonSmallSelected : styles.paymentButtonSmall}
                handleClick={() => handlePaymentOptionSelect('cashapp')}
            />
            <div className={selectedPaymentOption === 'credit card' ? styles.creditCardTextSelected : styles.creditCardText}>
                <Image
                    src="img/icons/creditCard.svg"
                    alt="button"
                    width={82}
                    height={13}
                    quality={100}
                    onClick={() => handlePaymentOptionSelect('credit card')}
                />
            </div>
        </div>
    );
}