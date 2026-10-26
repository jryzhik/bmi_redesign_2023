import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ScheduleIcon from '../public/img/icons/schedule_confirmed.png';
import H1 from '../components/fonts/H1';
import P from '../components/fonts/P';

export default function BanquetSuccess() {
    const router = useRouter();

    useEffect(() => {
        // Wait for the real URL query. Before this, router.query is empty, so the
        // events fired once as 1 ticket and then again with the real count.
        if (!router.isReady) return;

        // Get ticket count from URL (default to 1 if missing or not a number)
        const ticketCount = parseInt(router.query.tickets, 10) || 1;
        const ticketValue = ticketCount * 100;

        // Count each sign-up once, even if the page is refreshed.
        const fireKey = `banquet_conv_${ticketCount}`;
        try {
            if (sessionStorage.getItem(fireKey)) return;
            sessionStorage.setItem(fireKey, '1');
        } catch (e) {}

        // Google Tag Conversion
        const fireGoogleConversion = () => {
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'conversion', {
                    'send_to': 'AW-17674006388/7i_vCM_iirMbEPTez-tB',
                    'value': ticketValue,
                    'currency': 'USD'
                });
                console.log(`Google conversion fired: $${ticketValue} for ${ticketCount} tickets`);
            } else {
                setTimeout(fireGoogleConversion, 100);
            }
        };

        // Meta Pixel Purchase Event
        const fireMetaConversion = () => {
            if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'Purchase', {
                    value: ticketValue,
                    currency: 'USD',
                    content_name: ticketCount === 10 ?
                        'Banquet Table Sponsorship' :
                        `Banquet Tickets (${ticketCount})`,
                    content_type: 'event_ticket',
                    content_ids: ['banquet_ticket_nov22'],
                    num_items: ticketCount,
                    content_category: 'Fundraising Event'
                });

                // Also track registration completion
                window.fbq('track', 'CompleteRegistration', {
                    value: ticketValue,
                    currency: 'USD',
                    status: 'completed'
                });

                console.log(`Meta Pixel fired: $${ticketValue} for ${ticketCount} tickets`);
            } else {
                setTimeout(fireMetaConversion, 100);
            }
        };

        fireGoogleConversion();
        fireMetaConversion();

    }, [router.isReady, router.query.tickets]);

    // Get ticket count for display (optional)
    const ticketCount = parseInt(router.query.tickets, 10) || 1;

    return (
        <>
            <div className="generalCenter">
                <Image
                    src={ScheduleIcon}
                    alt="confirmed"
                    style={{ maxWidth: '30%', height: 'auto' }}
                />
                <H1 text="You're on the list!" />
                <P text={`${ticketCount} ${ticketCount === 1 ? 'seat' : 'seats'} reserved`} />
                <P text="Mark your calendar for an unforgettable evening" />
                <P text="November 17th | 7:00 PM | Forsyth Conference Center" />
            </div>
        </>
    );
}
