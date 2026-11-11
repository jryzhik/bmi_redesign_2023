import Head from 'next/head';
import { useRouter } from 'next/router';
import seoAutoTitleName from './seoAutoTitleName';

export default function withSeoTitle(Component) {
   function WithSeoTitle(props) {
      const router = useRouter();

      return (
         <>
            <Head>
               <title>{seoAutoTitleName(router.pathname)}</title>
            </Head>

            <Component {...props} />
         </>
      );
   }

   return WithSeoTitle;
}
