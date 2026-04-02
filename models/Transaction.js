const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true
  },
  type: {
    type: String,
    enum: ["IN", "OUT"],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transactions", transactionSchema);