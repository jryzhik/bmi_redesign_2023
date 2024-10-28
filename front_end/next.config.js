module.exports = {
   productionBrowserSourceMaps: true,
   async rewrites() {
      return [
         {
            source: '/stripe/create-payment-intent/:path*',
            destination: 'http://localhost:5252/stripe/create-payment-intent/:path*',
         },
         {
            source: '/stripe/config/:path*',
            destination: 'http://localhost:5252/stripe/config/:path*',
         },
         {
            source: '/media/:path*',
            destination: 'http://localhost:3000/media/:path*',
         },
      ];
   },

   images: {
      // domains: ['mcusercontent.com'],
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'mcusercontent.com',
            port: '',
            pathname: '/**',
         },
      ],
   },
};
