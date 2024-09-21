// models/Ticket.js
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  passengerName: { type: String, required: true },
  busOperator: { type: String, required: true },
  fare: { type: Number, required: true },
  purchaseDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ticket', ticketSchema);
