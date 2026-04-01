const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const itemRoutes = require("./routes/itemRoutes");
app.use("/api/items", itemRoutes);
const transactionRoutes = require("./routes/transactionRoutes");
app.use("/api/transactions", transactionRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);