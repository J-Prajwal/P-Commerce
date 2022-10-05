const express = require("express");
const CartModel = require("../Models/cart.model");

const cartController = express.Router();

cartController.get("/", async (req, res) => {
  try {
    const cart = await CartModel.find();
    res.status(200).send({ message: "Cart Items", data: cart });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = cartController;
