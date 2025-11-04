import React from 'react';
import Head from 'next/head';
import Impact from '../components/banquets/Impact';
import Welcome from '../components/banquets/Welcome';
import Journey from '../components/banquets/Journey';
import Guests from '../components/banquets/Guests';
import Tickets from '../components/banquets/Tickets';
import Performance from '../components/banquets/Performance';
import Slider from '../components/banquets/Slider';
import Hero from '../components/banquets/Hero';

const Banquet = () => {
    const eventStructuredData = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Belarus Mission Annual Banquet: Beyond the Borders",
        "startDate": "2025-11-22T18:00:00-05:00",
        "endDate": "2025-11-22T21:00:00-05:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
            "@type": "Place",
            "name": "Forsyth Conference Center",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "3410 Ronald Reagan Blvd",
                "addressLocality": "Cumming",
                "addressRegion": "GA",
                "postalCode": "30041",
                "addressCountry": "US"
            }
        },
        "image": [
            "https://byelorussianmission.org/img/banquet/banquet-1x1.jpg",
            "https://byelorussianmission.org/img/banquet/banquet-4x3.jpg",
            "https://byelorussianmission.org/img/banquet/banquet-16x9.jpg"
        ],
        "description": "Join Belarus Mission for an unforgettable evening featuring Inspire Music Band, keynote speaker Paul K. Steffens (15th generation descendant of Martin Luther), gourmet dinner, and powerful testimonies. Help us send 1 million Bibles to unreached nations in Russia, Kazakhstan, and Kyrgyzstan.",
        "offers": [
            {
                "@type": "Offer",
                "name": "Individual Ticket",
                "url": "https://byelorussianmission.org/banquet",
                "price": 100,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-10-01T12:00:00-05:00"
            },
            {
                "@type": "Offer",
                "name": "Table Sponsorship (10 seats)",
                "url": "https://byelorussianmission.org/banquet",
                "price": 1000,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-10-01T12:00:00-05:00"
            }
        ],
        "performer": [
            {
                "@type": "PerformingGroup",
                "name": "Inspire Music Band"
            },
            {
                "@type": "Person",
                "name": "Paul K. Steffens",
                "description": "Keynote Speaker - 15th Generation Descendant of Martin Luther"
            }
        ],
        "organizer": {
            "@type": "Organization",
            "name": "Belarus Mission",
            "url": "https://byelorussianmission.org"
        }
    };

    return (
        <>
            <Head>
                <title>Belarus Mission Annual Banquet 2025 - Beyond the Borders</title>
                <meta name="description" content="Join us November 22, 2025 for Belarus Mission's Annual Fundraising Banquet featuring Inspire Music Band and keynote speaker Paul K. Steffens." />

                {/* Event Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }}
                />
            </Head>
            <Hero />
            <Welcome />
            <Journey />
            <Guests />
            <Tickets />
            <Performance />
            <Slider />
            <Impact />
        </>
    );
};

export default Banquet;
