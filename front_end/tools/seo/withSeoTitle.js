/**
 * Backwards-compatible Pages Router helper. Metadata is rendered centrally by
 * _app; pass an object or a function receiving { pageProps, router } for a
 * page-only or dynamic-route override.
 */
export default function withSeoTitle(Component, seo) {
   function WithSeoTitle(props) {
      return <Component {...props} />;
   }

   WithSeoTitle.displayName = `withSeoTitle(${Component.displayName || Component.name || 'Component'})`;
   WithSeoTitle.seo = seo;

   return WithSeoTitle;
}
