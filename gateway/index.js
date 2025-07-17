const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

require('dotenv').config()

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const gateway = require('./routes/gateway');
app.use('/api/v1/gateway', gateway);

// Middleware for logging
app.use((req, res, next) => {
    console.log(`[GATEWAY] ${req.method} ${req.originalUrl}`);
    next();
});

Object.entries(JSON.parse(process.env.APIS)).forEach((api) => {
    app.use(api[1].route, createProxyMiddleware({
        target: api[1].url,
        changeOrigin: true
    }));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));