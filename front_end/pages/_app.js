import styles from '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Analytics />
      <Component {...pageProps} />
    </Layout>
  );
}