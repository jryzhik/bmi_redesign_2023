import React from 'react'
import PaymentProviderButtonSmall from './paymentProviderButtonSmall'
import styles from '../../styles/Donate/Donate.module.css';
import Image from 'next/image';


export default function AllPaymentProviderSmall() {
    return (
        <div style={{
            display: "flex",
            gap: ".2em"
        }}>
            <PaymentProviderButtonSmall
                imageUrl="/img/icons/apple-pay.svg"
                width={28}
            />
            <PaymentProviderButtonSmall
                imageUrl="/img/icons/zelle.svg"
                width={28}
            />
            <PaymentProviderButtonSmall
                imageUrl="/img/icons/paypal.svg"
                width={33}
            />
            <PaymentProviderButtonSmall
                imageUrl="/img/icons/venmo.svg"
                width={29}
            />
            <PaymentProviderButtonSmall
                imageUrl="/img/icons/cashapp.svg"
                width={50}
            />
            <div className={styles.creditCardText}>
                <Image
                    src="img/icons/creditCard.svg"
                    alt="button"
                    width={82}
                    height={13}
                    quality={100}
                />
            </div>
        </div>
    )
}
