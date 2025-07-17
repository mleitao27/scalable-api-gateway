const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const api3 = require('./routes/api3');

app.use('/api3', api3);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));