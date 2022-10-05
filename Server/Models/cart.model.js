const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  title: { type: String, required: true },
  cost: { type: Number, required: true },
  new: { type: Boolean, required: true },
  qty: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  category: { type: String, requried: true },
  rating: { type: Number, required: true },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;
