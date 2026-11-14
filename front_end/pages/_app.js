import { PageTransition } from 'next-page-transitions';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Layout from '../components/layout';
import Seo from '../components/seo/Seo';
import styles from '../styles/globals.css';

export default function MyApp({ Component, pageProps, router }) {
   const pageSeo = typeof Component.seo === 'function' ? Component.seo({ pageProps, router }) : Component.seo;

   return (
      <Layout>
         <Seo route={router.pathname} pathname={router.asPath} {...pageSeo} />
         <Analytics />
         <SpeedInsights />
         <PageTransition timeout={25} classNames="page-transition">
            {/* Keyed by URL so the page only swaps on a real navigation. Without a key,
                PageTransition rebuilt every page right after load, which made it blink
                and threw off the scroll position on phones. */}
            <Component {...pageProps} key={router.asPath.split('#')[0]} />
         </PageTransition>
      </Layout>
   );
}
