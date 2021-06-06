const Transaction = require('../models/Transaction');

// DESC:  Get all transactions
//        @Route:  Get /api/v1/transactions
//        @access: Public
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// DESC:  Add transactions
//        @Route:  POST /api/v1/transactions
//        @access: Public
exports.addTransactions = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};

// DESC:  Delete transactions
//        @Route:  DELETE /api/v1/transactions/:id
//        @access: Public
exports.deleteTransactions = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found!',
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// DESC:  Update transactions
//        @Route:  PUT /api/v1/transactions/:id
//        @access: Public
exports.updateTransactions = async (req, res) => {
  try {
    const transatcion = await Transaction.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      data: transatcion,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'Error Occured..',
    });
  }
};