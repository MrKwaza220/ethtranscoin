// routes/operatorRoutes.js
const express = require('express');
const { getOperatorData } = require('../controllers/operatorController');
const router = express.Router();

router.get('/operators', getOperatorData); // The API route to fetch all operators

module.exports = router;
