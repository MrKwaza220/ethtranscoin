// routes/blockchainRoutes.js
const express = require('express');
const { recordTransaction } = require('../controllers/blockchainController');

const router = express.Router();

router.post('/record', recordTransaction);

module.exports = router;
