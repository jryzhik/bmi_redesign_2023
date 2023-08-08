import React from 'react'
import styles from '../../styles/Donate/Donate.module.css';

export default function SubmitButton() {
    return (
        <button id={styles.stripe_button_submit} form='payment-form' type="submit">Give</button>
    )
}
