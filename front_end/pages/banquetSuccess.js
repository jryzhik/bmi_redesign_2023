import React, { useEffect } from 'react';
import Image from 'next/image';
import ScheduleIcon from '../public/img/icons/schedule_confirmed.png';
import H1 from '../components/fonts/H1';
import P from '../components/fonts/P';

export default function BanquetSuccess() {
    useEffect(() => {
        // Wait for gtag to be available, then fire conversion
        const fireConversion = () => {
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'conversion', {
                    'send_to': 'AW-17674006388/7i_vCM_iirMbEPTez-tB'
                });
                console.log('Conversion event fired successfully!');
            } else {
                // If gtag isn't ready yet, try again in 100ms
                setTimeout(fireConversion, 100);
            }
        };

        fireConversion();
    }, []); // Empty dependency array = runs once on mount

    return (
        <>
            <div className="generalCenter">
                <Image
                    src={ScheduleIcon}
                    alt="confirmed"
                    style={{ maxWidth: '30%', height: 'auto' }}
                />
                <H1 text="You're on the list!" />
                <P text="Mark your calendar for an unforgettable evening" />
                <P text="November 22nd | 6PM | Forsyth Conference Center" />
            </div>
        </>
    );
}
