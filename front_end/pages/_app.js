import {PageTransition} from 'next-page-transitions';
import styles from '../styles/globals.css';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import Layout from '../components/layout';

export default function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Analytics />
      <SpeedInsights />
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
    </Layout>
  );
}
