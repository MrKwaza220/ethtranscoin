// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  ticketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
  amount: { type: Number, required: true },
  transactionDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['successful', 'failed'], required: true },
});

module.exports = mongoose.model('Transaction', transactionSchema);
