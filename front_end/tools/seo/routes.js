const siteConfig = require('./siteConfig');

const DEFAULT_ROUTE_SEO = {
   title: siteConfig.defaultTitle,
   description: siteConfig.defaultDescription,
   index: true,
   follow: true,
   sitemap: true,
   changefreq: 'weekly',
   priority: 0.7,
};

/**
 * The route key may be either a Pages Router template (/calendar/[page]) or a
 * rendered URL (/calendar/2). Add page-specific exceptions here rather than
 * scattering Head tags through page components.
 */
const ROUTE_SEO = {
   '/': {
      title: 'Byelorussian Mission Inc.',
      titleAbsolute: true,
      description:
         'Byelorussian Mission equips and empowers people to serve Christ and strengthen communities in Belarus and Eastern Europe.',
      priority: 1,
   },
   '/contact': {
      title: 'Contact Us',
      description: 'Contact Byelorussian Mission to learn more, ask a question, or get involved.',
   },
   '/donate': {
      title: 'Support Our Mission',
      description: 'Support Byelorussian Mission as we serve churches, families, and communities in Eastern Europe.',
   },
   '/calendar': {
      title: 'Events Calendar',
      description: 'Explore upcoming events and ministry opportunities from Byelorussian Mission.',
   },
   '/calendar/[page]': {
      title: 'Events Calendar',
      description: 'Explore upcoming events and ministry opportunities from Byelorussian Mission.',
   },
   '/banquet': {
      title: 'Belarus Mission Annual Banquet 2026 - So the World May Believe',
      titleAbsolute: true,
      description:
         "Join us Tuesday, November 17, 2026 at 7:00 PM at the Forsyth Conference Center in Cumming, GA for Byelorussian Mission's annual banquet, with keynote speaker Preston Thompson and featured musician Joel Chernoff.",
      ogImage: 'https://byelorussianmission.org/img/banquet/banquet-2026-hero-bg.jpg',
   },
   '/privacy': {
      title: 'Privacy Policy',
      description: 'Read the Byelorussian Mission privacy policy.',
   },

   // Public pages remain crawlable so search engines can process noindex.
   '/search': { index: false, follow: true, sitemap: false },
   '/pay': { index: false, follow: true, sitemap: false },
   '/matching': { index: false, follow: true, sitemap: false },
   '/completion': { index: false, follow: false, sitemap: false },
   '/banquetSuccess': { index: false, follow: false, sitemap: false },
   '/test': { index: false, follow: false, sitemap: false },
   '/fonts': { index: false, follow: false, sitemap: false },
   '/404': { index: false, follow: false, sitemap: false },
   '/500': { index: false, follow: false, sitemap: false },
   '/api/*': { index: false, follow: false, sitemap: false },
   '/admin/*': { index: false, follow: false, sitemap: false },
   '/private/*': { index: false, follow: false, sitemap: false },
};

function matchesRoute(route, pattern) {
   if (route === pattern) return true;

   const escapedPattern = pattern
      .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
      .replace(/\\\[\\\.\\\.\\.[^\]]+\\\]/g, '.*')
      .replace(/\\\[[^\]]+\\\]/g, '[^/]+')
      .replace(/\\\*/g, '.*');

   return new RegExp(`^${escapedPattern}$`).test(route);
}

function getRouteSeo(route) {
   const pathname = route || '/';
   const entry = Object.entries(ROUTE_SEO).find(([pattern]) => matchesRoute(pathname, pattern));

   const metadata = { ...DEFAULT_ROUTE_SEO, ...(entry ? entry[1] : {}) };

   if (!entry && pathname !== '/') {
      const routeName = pathname
         .split('/')
         .filter(Boolean)
         .pop()
         ?.replace(/[-_]/g, ' ')
         .replace(/\b\w/g, (char) => char.toUpperCase());

      if (routeName) metadata.title = routeName;
   }

   return metadata;
}

function getSitemapExcludePatterns() {
   return Object.entries(ROUTE_SEO)
      .filter(([, metadata]) => metadata.sitemap === false)
      .map(([route]) => route);
}

module.exports = {
   DEFAULT_ROUTE_SEO,
   ROUTE_SEO,
   getRouteSeo,
   getSitemapExcludePatterns,
};
