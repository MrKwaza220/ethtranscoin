// routes/operatorRoutes.js
const express = require('express');
const { getOperatorData } = require('../controllers/operatorController');

const router = express.Router();

router.get('/', getOperatorData);

module.exports = router;
