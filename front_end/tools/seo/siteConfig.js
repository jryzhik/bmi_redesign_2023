/**
 * This module deliberately uses CommonJS so it can be loaded by
 * next-sitemap.config.js during Node.js builds. Client-side SEO helpers import
 * it through tools/seo/config.js.
 */
const siteConfig = {
   siteUrl: 'https://byelorussianmission.org',
   siteName: 'Byelorussian Mission',
   titleSeparator: ' | ',
   defaultTitle: 'Byelorussian Mission',
   defaultDescription:
      'Byelorussian Mission equips and empowers people to serve Christ and strengthen communities in Belarus and Eastern Europe.',
   defaultOgImage: null,
};

module.exports = siteConfig;
