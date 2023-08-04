import React from 'react'
import Image from 'next/image';
import styles from '../../styles/Donate/Donate.module.css';


export default function PaymentProviderButtonSmall({ imageUrl, width, handleClick, passedStyle }) {
    return (
        <div onClick={handleClick} className={passedStyle}>
            <Image
                src={imageUrl}
                alt="button"
                width={width}
                height={13}
                quality={100}
            />
        </div>
    )
}
