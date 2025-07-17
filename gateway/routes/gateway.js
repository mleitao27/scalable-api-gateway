const express = require('express')
const router = express.Router()

// Request access
router.get('/', async (req, res) => {
    res.status(200).send('gateway')
});

module.exports = router