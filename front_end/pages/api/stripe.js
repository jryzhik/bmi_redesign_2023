import stripePackage from 'stripe';

const stripeSecretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
const stripe = stripePackage(stripeSecretKey);

export default async (req, res) => {
    const { query, method, body } = req;

    if (method === 'GET') {
        if (query.action === 'config') {
            res.json({
                publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
            });
        } else {
            return res.status(405).json({ error: { message: 'Method not allowed' } });
        }
    } else if (method === 'POST') {
        if (body.action === 'create-payment-intent') {
            const { number } = body;

            try {
                const paymentIntent = await stripe.paymentIntents.create({
                    currency: 'USD',
                    amount: number,
                    automatic_payment_methods: { enabled: true },
                });

                res.json({
                    clientSecret: paymentIntent.client_secret,
                });
            } catch (e) {
                return res.status(400).json({
                    error: {
                        message: e.message,
                    },
                });
            }
        } else {
            return res.status(405).json({ error: { message: 'Method not allowed' } });
        }
    } else {
        return res.status(405).json({ error: { message: 'Method not allowed' } });
    }
};
