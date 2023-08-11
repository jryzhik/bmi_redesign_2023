module.exports = {
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
        ];
    },
};