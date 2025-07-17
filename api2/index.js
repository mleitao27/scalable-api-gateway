const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const api2 = require('./routes/api2');

app.use('/api2', api2);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));