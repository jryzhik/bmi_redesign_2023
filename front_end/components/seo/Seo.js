import Head from 'next/head';
import SEO_CONFIG from '../../tools/seo/config';
import routeSeo from '../../tools/seo/routes';

function formatTitle(title, titleAbsolute) {
   if (titleAbsolute) return title;
   if (!title || title === SEO_CONFIG.defaultTitle) return SEO_CONFIG.defaultTitle;
   return `${title}${SEO_CONFIG.titleSeparator}${SEO_CONFIG.siteName}`;
}

function canonicalUrl(pathname) {
   const path = (pathname || '/').split(/[?#]/)[0] || '/';
   return new URL(path, SEO_CONFIG.siteUrl).toString();
}

/**
 * Site-wide SEO defaults. A page may export a `seo` object or function; see
 * withSeoTitle for a Pages Router-friendly API.
 */
export default function Seo({ route, pathname, ...overrides }) {
   const metadata = { ...routeSeo.getRouteSeo(route), ...overrides };
   const title = formatTitle(metadata.title, metadata.titleAbsolute);
   const description = metadata.description || SEO_CONFIG.defaultDescription;
   const canonical = metadata.canonical || canonicalUrl(pathname || route);
   const robots = `${metadata.index === false ? 'noindex' : 'index'},${metadata.follow === false ? 'nofollow' : 'follow'}`;

   return (
      <Head>
         <title key="title">{title}</title>
         <meta key="description" name="description" content={description} />
         <meta key="robots" name="robots" content={robots} />
         <link key="canonical" rel="canonical" href={canonical} />
         <meta key="og:type" property="og:type" content="website" />
         <meta key="og:title" property="og:title" content={title} />
         <meta key="og:description" property="og:description" content={description} />
         <meta key="og:url" property="og:url" content={canonical} />
         {metadata.ogImage || SEO_CONFIG.defaultOgImage ? (
            <meta key="og:image" property="og:image" content={metadata.ogImage || SEO_CONFIG.defaultOgImage} />
         ) : null}
      </Head>
   );
}
