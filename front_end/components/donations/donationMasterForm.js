import { useEffect } from 'react';
import Script from 'next/script';
import styles from '../../styles/Donate/Donate.module.css';
import HeaderNComponent from '../texts/HeaderNComponent';
import P from '../fonts/P';

export default function DonationMasterForm({ headerText, secondaryText, secondaryAllign, color, widgetID }) {

    return (
        <>
            {/* Load the modified local script */}
            <Script
                src="/js/latest.umd.cjs?acct=ajjQbn3T6YpCI7Vx&p=other"  // Pass query params in the local script URL
                strategy="lazyOnload"
                onLoad={() => {
                    console.log("📜 Modified Givebutter script loaded");
                }}
            />
            <div className={styles.formContainer}>
                <HeaderNComponent
                    primaryHeaderText={headerText}
                    SecondaryComponent={<P color={color} text={secondaryText} />}
                    secondaryAllign={secondaryAllign}
                    color={color}
                />
                <div className={styles.giveButter}>
                    <givebutter-widget id={widgetID}></givebutter-widget>
                </div>
            </div>
        </>
    );
}
