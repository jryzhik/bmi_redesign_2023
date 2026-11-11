import SEO_CONFIG from './config';

export default function seoAutoTitleName(pathname) {
   // Check custom title
   const customTitle = SEO_CONFIG.titles[pathname];

   // Generate title from pathname if custom title doesn't exist
   const title =
      customTitle ||
      pathname
         .split('/')
         .filter(Boolean)
         .pop()
         ?.replace(/[-_]/g, ' ')
         .replace(/\b\w/g, (char) => char.toUpperCase());

   return `${title || SEO_CONFIG.defaultTitle}${SEO_CONFIG.separator}${SEO_CONFIG.siteName}`;
}
