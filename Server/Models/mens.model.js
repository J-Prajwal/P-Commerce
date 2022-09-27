const mongoose = require("mongoose");

const mensSchema = mongoose.Schema({
  title: { type: String, required: true },
  cost: { type: Number, required: true },
  new: { type: Boolean, required: true },
  qty: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  category: { type: String, requried: true },
  rating: { type: Number, required: true },
});

const MensModel = mongoose.model("mens", mensSchema);

module.exports = MensModel;
