import { PageTransition } from 'next-page-transitions';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Layout from '../components/layout';
import styles from '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
   return (
      <Layout>
         <Analytics />
         <SpeedInsights />
         <PageTransition timeout={25} classNames="page-transition">
            <Component {...pageProps} />
         </PageTransition>
      </Layout>
   );
}
