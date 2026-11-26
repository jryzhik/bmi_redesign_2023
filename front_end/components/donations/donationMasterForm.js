import { useEffect, useState } from 'react';
import Script from 'next/script';
import styles from '../../styles/Donate/Donate.module.css';
import HeaderNComponent from '../texts/HeaderNComponent';
import P from '../fonts/P';
import Image from 'next/image'
import theme from '../../styles/theme';

export default function DonationMasterForm({ headerText, secondaryText, secondaryAllign, color, widgetID, giveButterID }) {
    const [showApplePay, setShowApplePay] = useState(false);
    const [isDark, setisDark] = useState(true)

    useEffect(() => {
        if (window.ApplePaySession && ApplePaySession.canMakePayments()) {
            setShowApplePay(true);
        }

        if (color == theme.colors.WHITE) {
            setisDark(false);
        }
    }, []);

    // Givebutter's "Thank you page" setting: after a gift, its form (in a frame from
    // givebutter.com) asks this page to go to the thank-you address. Our copy of the widget
    // script predates that, so the request is handled here, the way Givebutter's own script does.
    useEffect(() => {
        const onMessage = (event) => {
            if (event.origin !== 'https://givebutter.com') return;
            const data = event.data;
            if (!data || typeof data !== 'object' || data.givebutter !== true) return;
            if (data.event !== 'post_checkout.redirect' || typeof data.redirectUrl !== 'string') return;
            try {
                const url = new URL(data.redirectUrl);
                if (url.protocol === 'https:') window.location.assign(url.href);
            } catch (e) {}
        };
        window.addEventListener('message', onMessage);
        return () => window.removeEventListener('message', onMessage);
    }, []);

    const handleApplePay = () => {
        window.open(`https://givebutter.com/${giveButterID}`, '_blank');
    };

    return (
        <>
            <Script
                src="/js/latest.umd.cjs?acct=ajjQbn3T6YpCI7Vx&p=other"
                strategy="lazyOnload"
                onLoad={() => console.log("📜 Modified Givebutter script loaded")}
            />
            <div className={styles.formContainer} id="donate">
                <HeaderNComponent
                    primaryHeaderText={headerText}
                    SecondaryComponent={<P color={color} text={secondaryText} />}
                    secondaryAllign={secondaryAllign}
                    color={color}
                />
                <div className={styles.paymentContainer}>
                    {showApplePay && (
                        <button
                            onClick={handleApplePay}
                            className={isDark ? styles.applePayButtonBlack : styles.applePayButtonWhite}
                        >
                            Donate with
                            <Image
                                src={isDark ? "/img/logos/apple-pay-logo-white.svg" : "/img/logos/apple-pay-logo-black.svg"}
                                alt="Apple Pay"
                                width={50}
                                height={30}
                                className={styles.applePayLogo}
                            />
                        </button>
                    )}
                    <div className={styles.giveButter}>
                        <givebutter-widget id={widgetID}></givebutter-widget>
                    </div>
                </div>
            </div>
        </>
    );
}
