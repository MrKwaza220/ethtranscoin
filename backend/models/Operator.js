// models/Operator.js
const mongoose = require('mongoose');

const operatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Any other fields related to operators
});

module.exports = mongoose.model('Operator', operatorSchema);
