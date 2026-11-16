/** @type {import('next-sitemap').IConfig} */
// Keep build configuration in CommonJS: next-sitemap loads this file in Node.js.
const siteConfig = require('./tools/seo/siteConfig');
const { getRouteSeo, getSitemapExcludePatterns } = require('./tools/seo/routes');
const { getDynamicSitemapPaths } = require('./tools/seo/sitemap');

module.exports = {
   siteUrl: siteConfig.siteUrl,

   generateRobotsTxt: true,
   generateIndexSitemap: false,

   sitemapSize: 5000,

   exclude: getSitemapExcludePatterns(),

   // Extend tools/seo/sitemap.js when CMS-backed dynamic routes are ready.
   additionalPaths: getDynamicSitemapPaths,

   robotsTxtOptions: {
      policies: [
         {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/private/'],
         },
      ],
   },

   transform: async (config, path) => {
      const metadata = getRouteSeo(path);

      if (metadata.sitemap === false || metadata.index === false) return null;

      return {
         loc: path,
         changefreq: metadata.changefreq,
         priority: metadata.priority,
      };
   },
};
