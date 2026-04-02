const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  price: Number,
  quantity: Number
}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema, "items");