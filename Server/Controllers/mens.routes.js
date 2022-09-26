const express = require("express");
const MensModel = require("../Models/mens.model");

const mensController = express.Router();

mensController.get("/", async (req, res) => {
  if (req.query.category) {
    try {
      const prods = await MensModel.find({category: {$regex: req.query.category}});
      res.status(200).send(prods);
    } catch (err) {
      res.status(500).send({ message: "Please try again!" });
    }
  } else {
    try {
      const prods = await MensModel.find();
      res.status(200).send(prods);
    } catch (err) {
      res.status(500).send({ message: "Please try again!" });
    }
  }
});

mensController.post("/new", async (req, res) => {
  try {
    const newProd = new MensModel(req.body);
    await newProd.save();
    res.status(200).send({ message: "Data added!", newProd });
  } catch (err) {
    res.status(500).send({ message: "Please try again!" });
  }
});

module.exports = mensController;
