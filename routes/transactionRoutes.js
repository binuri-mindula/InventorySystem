const router = require("express").Router();
const {
  stockIn,
  stockOut,
  getTransactions
} = require("../controllers/transactionController");

router.post("/in/:id", stockIn);
router.post("/out/:id", stockOut);
router.get("/", getTransactions);

module.exports = router;