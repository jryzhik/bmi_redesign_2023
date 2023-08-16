import React from 'react'
import Image from 'next/image';
import styles from '../../styles/Donate/Donate.module.css';


export default function MobilePaymentProviderButton({ imageUrl, width, handleClick }) {
    return (
        <div onClick={handleClick} className={styles.paymentButtonMobile}>
            <Image
                src={imageUrl}
                alt="button"
                width={width}
                height={40}
                quality={100}
            />
        </div>
    )
}
