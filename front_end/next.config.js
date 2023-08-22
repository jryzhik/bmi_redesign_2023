module.exports = {
    // Add the .well-known folder to the public array
    publicRuntimeConfig: {
      public: [
        // Include other public assets if needed
        '.well-known',
      ],
    },
    // Your other config options...
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
        // Other rewrite rules...
      ];
    },
  };