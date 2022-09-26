const mongoose = require("mongoose");

const womensSchema = mongoose.Schema({
  title: { type: String, required: true },
  cost: { type: Number, required: true },
  qty: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  category: { type: String, requried: true },
  rating: { type: Number, required: true },
});

const WomensModel = mongoose.model("womens", womensSchema);

module.exports = WomensModel;
