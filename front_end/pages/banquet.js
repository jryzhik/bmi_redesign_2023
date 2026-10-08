import React from 'react';
import Head from 'next/head';
import Impact from '../components/banquets/Impact';
import Welcome from '../components/banquets/Welcome';
import Journey from '../components/banquets/Journey';
import Guests from '../components/banquets/Guests';
import Tickets from '../components/banquets/Tickets';
import Performance from '../components/banquets/Performance';
import Slider from '../components/banquets/Slider';
import LastYear from '../components/banquets/LastYear';
import Keynote from '../components/banquets/Keynote';
import Hero from '../components/banquets/Hero';
import EventBar from '../components/banquets/EventBar';

const title = 'Belarus Mission Annual Banquet 2026 - So the World May Believe';
const description =
    "Join us Tuesday, November 17, 2026 at 7:00 PM at the Forsyth Conference Center in Cumming, GA for Byelorussian Mission's annual banquet, with keynote speaker Dr. Jeff Jackson and featured musician Joel Chernoff.";
const heroImage = 'https://byelorussianmission.org/img/banquet/banquet-2026-hero-bg.jpg';

const Banquet = () => {
    // End time is not confirmed yet, so only the start time is listed.
    const eventStructuredData = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Belarus Mission Annual Banquet: So the World May Believe",
        "startDate": "2026-11-17T19:00:00-05:00",
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
        "image": [heroImage],
        "description": description,
        "offers": [
            {
                "@type": "Offer",
                "name": "Individual Ticket",
                "url": "https://byelorussianmission.org/banquet",
                "price": 100,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
            },
            {
                "@type": "Offer",
                "name": "Table Sponsorship (10 seats)",
                "url": "https://byelorussianmission.org/banquet",
                "price": 1000,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
            }
        ],
        "performer": [
            {
                "@type": "Person",
                "name": "Dr. Jeff Jackson",
                "description": "Keynote Speaker, First Redeemer Church, Cumming"
            },
            {
                "@type": "Person",
                "name": "Joel Chernoff",
                "description": "Featured Musician, Founder of LAMB"
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
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={heroImage} />

                {/* Event Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }}
                />
            </Head>
            <Hero />
            <EventBar />
            <Welcome />
            <Journey />
            <Guests />
            <LastYear />
            <Tickets />
            <Performance />
            <Keynote />
            <Slider />
            <Impact />
        </>
    );
};

export default Banquet;
