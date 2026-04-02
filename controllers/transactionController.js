const Item = require("../models/Item");
const Transaction = require("../models/Transaction");

exports.stockIn = async (req, res) => {
  try {
    const { quantity } = req.body;
    const item = await Item.findById(req.params.id);

    item.quantity += Number(quantity);
    await item.save();

    const transaction = new Transaction({
      itemId: item._id,
      type: "IN",
      quantity
    });

    await transaction.save();
    res.json({ message: "Stock added" });

  } catch (err) {
    res.status(500).json(err);
  }
};

exports.stockOut = async (req, res) => {
  try {
    const { quantity } = req.body;
    const item = await Item.findById(req.params.id);

    if (item.quantity < quantity)
      return res.status(400).json("Not enough stock");

    item.quantity -= Number(quantity);
    await item.save();

    const transaction = new Transaction({
      itemId: item._id,
      type: "OUT",
      quantity
    });

    await transaction.save();
    res.json({ message: "Stock removed" });

  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getTransactions = async (req, res) => {
  const transactions = await Transaction
    .find()
    .populate("itemId", "name");

  res.json(transactions);
};