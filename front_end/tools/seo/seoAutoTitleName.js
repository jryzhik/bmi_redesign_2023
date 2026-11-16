import SEO_CONFIG from './config';
import routeSeo from './routes';

export default function seoAutoTitleName(pathname) {
   const metadata = routeSeo.getRouteSeo(pathname);
   const title = metadata.title || SEO_CONFIG.defaultTitle;

   return title === SEO_CONFIG.defaultTitle ? title : `${title}${SEO_CONFIG.titleSeparator}${SEO_CONFIG.siteName}`;
}
