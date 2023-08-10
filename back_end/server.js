const express = require("express");
const app = express();
const { resolve } = require("path");
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.static(process.env.STATIC_DIR));

app.get("/", (req, res) => {
    const path = resolve(process.env.STATIC_DIR + "/index.html");
    res.sendFile(path);
});

app.get("/config", (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
});

app.post("/create-payment-intent", async (req, res) => {
    const { number } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "USD",
            amount: number,
            automatic_payment_methods: { enabled: true },
        });

        // Send publishable key and PaymentIntent details to client
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
});

app.post("/create-customer", async (req, res) => {
    try {
        const customer = await stripe.customers.create({
            name: "Mr. Testing System",
            email: "testingbool@gmail.com",
            description: 'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
        });

        res.send({
            message: "Customer created successfully",
            customerId: customer.id
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
});

app.post("/create-payment-method", async (req, res) => {
    try {
        const paymentMethod = await stripe.paymentMethods.create({
            type: 'card',
            card: {
                number: '4242424242424242',
                exp_month: 12,
                exp_year: 2034,
                cvc: '314',
            },
        });

        res.send({
            message: "Customer payment method successfully",
            paymentMethod: paymentMethod
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
});

app.post("/create-product", async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: 'Orphan Adoption Program',
        });

        res.send({
            message: "Product created successfully",
            product: product.id
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
});

app.get("/find-customer", async (req, res) => {
    try {
        const customer = await stripe.customers.search({
            query: 'email:\'testincbool@gmail.com\'',
        });
        if (customer.data.length !== 0) {
            res.send({
                message: "Customer found ",
                customerId: customer.data[0].id
            });
        } else {
            res.send({
                message: "Customer not found ",
                customerId: null
            });
        }
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
});
app.post("/create-subscription", async (req, res) => {
    try {
        const subscription = await stripe.subscriptions.create({
            customer: 'cus_OQ5fYarXuFCwEu'
            ,
            items: [
                {
                    price_data: {
                        unit_amount: 5000,
                        currency: 'usd',
                        product: 'prod_OQC6DDh5drBDFB'
                        ,
                        recurring: {
                            interval: 'month',
                        },
                    },
                },
            ],
        });
        res.send({
            message: "Created subscription ",
            subscription: subscription
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
});
app.post("/test-route", (req, res) => {
    console.log("Received request body:", req.body);
    res.send(req.body);
});

app.listen(5252, () =>
    console.log(`Node server listening at http://localhost:5252`)
);
