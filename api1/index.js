const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const api1 = require('./routes/api1');

app.use('/api1', api1);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));