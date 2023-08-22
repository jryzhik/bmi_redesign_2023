import fetch from 'node-fetch';

const base = "https://paypal.com";

const generateAccessToken = async () => {
    try {
        const auth = Buffer.from(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID + ":" + process.env.NEXT_PUBLIC_PAYPAL_APP_SECRET).toString("base64");
        const response = await fetch(`${base}/v1/oauth2/token`, {
            method: "post",
            body: "grant_type=client_credentials",
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Failed to generate Access Token:", error);
    }
};

const createOrder = async (number) => {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const payload = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: number,
                },
            },
        ],
    };

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        method: "POST",
        body: JSON.stringify(payload),
    });

    return handleResponse(response);
};

const capturePayment = async (orderID) => {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}/capture`;

    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return handleResponse(response);
};

async function handleResponse(response) {
    if (response.status === 200 || response.status === 201) {
        return response.json();
    }

    const errorMessage = await response.text();
    throw new Error(errorMessage);
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { action } = req.body;

        if (action === 'create-order') {
            const { number } = req.body;
            try {
                const response = await createOrder(number);
                res.status(200).json(response);
            } catch (error) {
                console.error("Failed to create order:", error);
                res.status(500).json({ error: "Failed to create order." });
            }
        } else if (action === 'capture-order' && req.query.orderID) {
            const orderID = req.query.orderID;
            try {
                const response = await capturePayment(orderID);
                res.status(200).json(response);
            } catch (error) {
                console.error("Failed to capture order:", error);
                res.status(500).json({ error: "Failed to capture order." });
            }
        } else {
            res.status(400).json({ error: 'Invalid action or orderID missing' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
