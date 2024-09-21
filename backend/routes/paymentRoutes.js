const express = require('express');
const paymentController = require('../controllers/paymentController'); // Import the whole module

const router = express.Router();

router.post('/payment', paymentController.processPayment); // Use the controller

module.exports = router;
