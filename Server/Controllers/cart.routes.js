const express = require("express");
const CartModel = require("../Models/cart.model");

const cartController = express.Router();

cartController.get("/", async (req, res) => {
  try {
    const cart = await CartModel.find();
    if (cart) {
      res.send({ message: "Cart Item", data: cart });
    } else {
      res.send({ message: "Cart Is Empty", data: cart });
    }
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error", err });
  }
});

cartController.post("/new", async (req, res) => {
  res.send(req.body);
  try {
    const newItem = await CartModel(req.body);
    await newItem.save();
    res.status(200).send({ message: "New Item added to cart", data: newItem });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = cartController;
