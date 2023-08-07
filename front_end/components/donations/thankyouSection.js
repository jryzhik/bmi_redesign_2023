import React from 'react'
import styles from '../../styles/Donate/Donate.module.css';
import Image from 'next/image';
import H2 from '../fonts/H2';
import theme from '../../styles/theme';
import P from '../fonts/P';

export default function ThankyouSection({ fund }) {
    return (
        <div className={styles.thankYouSection}>
            <div style={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", alignItems: "center", gap: "1em" }}>
                <Image
                    src={`/img/icons/funds_icons/${fund}.svg`}
                    alt={fund}
                    width={150}
                    height={150}
                    quality={100}
                />
                <H2 color={theme.colors.BLACK} text="Thank you for your generous donation!"/>
                <P color={theme.colors.BLACK} text="Your donation confirmation has been sent to your email address."/>
            </div>
        </div>
    )
}
