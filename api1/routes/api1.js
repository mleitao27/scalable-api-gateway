const express = require('express')
const router = express.Router()

router.get('/1', async (req, res) => {
    res.status(200).send('api1-1')
});

router.get('/2', async (req, res) => {
    res.status(200).send('api1-2')
});

router.get('/3', async (req, res) => {
    res.status(200).send('api1-3')
});

module.exports = router