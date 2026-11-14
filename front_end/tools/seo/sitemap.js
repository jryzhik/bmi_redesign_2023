/** Add CMS-backed, canonical paths here when dynamic routes become indexable. */
const dynamicSitemapPaths = [];

async function getDynamicSitemapPaths() {
   return dynamicSitemapPaths;
}

module.exports = { getDynamicSitemapPaths };
