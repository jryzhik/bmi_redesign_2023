const express = require("express");
const app = express();
const { resolve } = require("path");
const env = require("dotenv").config({ path: "./.env" });
const stripeRoutes = require('./routes/stripeRoutes');
const paypalRoutes = require('./routes/paypalRoutes');


app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.static(process.env.STATIC_DIR));

app.use('/stripe', stripeRoutes);
app.use('/paypal', paypalRoutes);

app.listen(5252, () =>
    console.log(`Node server listening at http://localhost:5252`)
);
