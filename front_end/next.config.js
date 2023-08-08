module.exports = {
    async rewrites() {
        return [
            {
                source: '/create-payment-intent/:path*',
                destination: 'http://localhost:5252/create-payment-intent/:path*',
            },
            {
                source: '/config/:path*',
                destination: 'http://localhost:5252/config/:path*',
            },
        ];
    },
};