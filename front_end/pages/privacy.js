import React from 'react';
import Head from 'next/head';
import H1 from '../components/fonts/H1';
import H2 from '../components/fonts/H2';
import P from '../components/fonts/P';

const sections = [
  {
    title: 'Who we are',
    body: [
      'Byelorussian Mission, Inc. ("we", "us") is a nonprofit ministry based at 3395 Chamblee Gap Road, Cumming, GA 30040. This policy explains what information we collect on byelorussianmission.org and how we use it.',
    ],
  },
  {
    title: 'Information you give us',
    body: [
      'When you register for an event, make a donation, sign up for a trip or contact us, we collect what you enter, such as your name, email address, phone number, the number of tickets and your message. Registration forms are provided by Typeform, and payments are processed by our payment providers (such as Stripe and PayPal). We do not store your full card details.',
    ],
  },
  {
    title: 'Cookies, analytics and advertising',
    body: [
      'Our site uses the Meta Pixel, Google tags and Vercel Analytics. These tools use cookies and similar technologies to measure visits, understand which pages are useful, and tell us when an event registration is completed, so we can show our announcements to people who may be interested and measure whether they work.',
      'Meta and Google may combine this with information they already have under their own privacy policies. You can control ad personalization in your Facebook and Google account settings, and you can block or delete cookies in your browser.',
    ],
  },
  {
    title: 'How we use information',
    body: [
      'We use your information to process registrations and gifts, send receipts and event details, answer your questions, share ministry updates if you ask for them, and improve our website and outreach. We do not sell your personal information.',
    ],
  },
  {
    title: 'Sharing',
    body: [
      'We share information only with service providers that help us run the site, forms, payments and communications, or when required by law.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      'You can unsubscribe from our emails at any time using the link in the email. To see, correct or delete the information we hold about you, email us at info@byelorussianmission.org.',
    ],
  },
  {
    title: 'Contact',
    body: ['Questions about this policy: info@byelorussianmission.org.', 'Last updated October 25, 2026.'],
  },
];

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Byelorussian Mission</title>
      </Head>
      <div style={{ padding: '6em 1.5em 4em', maxWidth: '760px', margin: '0 auto' }}>
        <H1 text="Privacy Policy" />
        {sections.map((s) => (
          <div key={s.title} style={{ marginTop: '2em' }}>
            <H2 text={s.title} />
            {s.body.map((t, i) => (
              <P key={i} text={t} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
