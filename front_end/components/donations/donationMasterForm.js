import { useEffect, useState } from 'react';
import Script from 'next/script';
import styles from '../../styles/Donate/Donate.module.css';
import HeaderNComponent from '../texts/HeaderNComponent';
import P from '../fonts/P';

export default function DonationMasterForm({ headerText, secondaryText, secondaryAllign, color, widgetID }) {
    const [showApplePay, setShowApplePay] = useState(false);

    useEffect(() => {
        if (window.ApplePaySession && ApplePaySession.canMakePayments()) {
            setShowApplePay(true);
        }
    }, []);

    const handleApplePay = () => {
        window.open(`https://givebutter.com/${widgetID}`, '_blank');
    };

    return (
        <>
            <Script
                src="/js/latest.umd.cjs?acct=ajjQbn3T6YpCI7Vx&p=other"
                strategy="lazyOnload"
                onLoad={() => console.log("📜 Modified Givebutter script loaded")}
            />
            <div className={styles.formContainer}>
                <HeaderNComponent
                    primaryHeaderText={headerText}
                    SecondaryComponent={<P color={color} text={secondaryText} />}
                    secondaryAllign={secondaryAllign}
                    color={color}
                />
                {showApplePay && (
                    <button 
                        onClick={handleApplePay}
                        className={styles.applePayButton}
                    >
                        Pay with Apple Pay
                    </button>
                )}
                <div className={styles.giveButter}>
                    <givebutter-widget id={widgetID}></givebutter-widget>
                </div>
            </div>
        </>
    );
}