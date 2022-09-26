const mongoose = require("mongoose");

const kidsSchema = mongoose.Schema({
  title: { type: String, required: true },
  cost: { type: Number, required: true },
  qty: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  category: { type: String, requried: true },
  rating: { type: Number, required: true },
});

const KidsModel = mongoose.model("mens", kidsSchema);

module.exports = KidsModel;
