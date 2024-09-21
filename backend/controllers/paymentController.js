// controllers/paymentController.js
const Ticket = require('../models/Ticket');
const Transaction = require('../models/Transaction');

exports.processPayment = async (req, res) => {
  const { passengerName, busOperator, fare } = req.body;

  try {
    // Create ticket
    const ticket = await Ticket.create({ passengerName, busOperator, fare });

    // Simulate payment processing and create transaction
    const transaction = await Transaction.create({
      ticketId: ticket._id,
      amount: fare,
      status: 'successful',
    });

    res.status(201).json({ ticket, transaction });
  } catch (error) {
    res.status(500).json({ message: 'Payment processing failed', error });
  }
};
