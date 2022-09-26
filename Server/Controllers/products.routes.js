const express = require("express");
const ProductModel = require("../Models/product.model");

const productController = express.Router();

productController.get("/", async (req, res) => {
  const prods = await ProductModel.find();
  res.send(prods);
});

productController.post("/new", async (req, res) => {
  const { title, cost, qty, userId } = req.body;
  const product = new ProductModel({ title, cost, qty, userId });
  await product.save();
  res.send({ message: "New Product Added!", newProduct: product });
});

productController.patch("/edit/:prodId", async (req, res) => {
  const { userId } = req.body;
  const { prodId } = req.params;
  const product = await ProductModel.findOne({ prodId });
  if (product.userId === userId) {
    const newProd = await ProductModel.findOneAndUpdate(
      { _id: prodId },
      req.body,
      { new: true }
    );
    return res.send({ message: "Data updated successfully!", newProd });
  } else {
    res.send("You are not authorized to make changes in this document");
  }
});

productController.delete("/delete/:prodId", async (req, res) => {
  const { userId } = req.body;
  const { prodId } = req.params;
  const product = await ProductModel.findOne({ prodId });

  if (product.userId === userId) {
    await ProductModel.findOneAndDelete({ _id: prodId });
    res.send({
      message: "Data deleted successfully!",
      deletedProduct: product,
    });
  }
});

module.exports = productController;
