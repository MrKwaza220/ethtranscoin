// controllers/operatorController.js
const Operator = require('../models/Operator');

const getOperatorData = async (req, res) => {
  try {
    // Fetch all operators from the database
    const operators = await Operator.find();
    res.json(operators); // Send the operators as JSON to the frontend
  } catch (error) {
    console.error('Error fetching operators:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getOperatorData };
