const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cors = require("cors");


const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET } = process.env;
const base = "https://api-m.sandbox.paypal.com";
const router = express.Router();
router.use(cors({origin: '*'}));

const generateAccessToken = async () => {
    try {
        const auth = Buffer.from(PAYPAL_CLIENT_ID + ":" + PAYPAL_APP_SECRET).toString("base64");
        const response = await fetch(`${base}/v1/oauth2/token`, {
          method: "post",
          body: "grant_type=client_credentials",
          headers: {
            Authorization: `Basic ${auth}`,
          },
        });
      
        const data = await response.json();
        return data.access_token;
    } catch(error) {
        console.error("Failed to generate Access Token:", error);
    }
   
};

const createOrder = async () => {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const payload = {
        intent: "CAPTURE",
        purchase_units: [
        {
            amount: {
            currency_code: "USD",
            value: "0.02",
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
        }
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

router.post("/orders", async (req, res) => {
    try{
        const response = await createOrder();
        res.json(response);
    } catch(error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to create order." });
    }
});

router.post("/orders/:orderID/capture", async (req, res) => {
    try {
        const { orderID } = req.params;
        const response = await capturePayment(orderID);
        res.json(response);
    } catch (error){
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to capture order." });
    }
});


module.exports = router;
