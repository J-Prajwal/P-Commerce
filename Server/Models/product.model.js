const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  cost: { type: Number, required: true },
  qty: { type: Number, required: true },
  userId: { type: String, required: true },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
