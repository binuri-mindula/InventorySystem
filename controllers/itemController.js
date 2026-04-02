const Item = require("../models/Item");

exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    const saved = await item.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.updateItem = async (req, res) => {
  const updated = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json("Item deleted");
};