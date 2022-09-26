const express = require("express");
const connection = require("./Config/db");
const mensController = require("./Controllers/mens.routes");
const userController = require("./Controllers/user.routes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/mens", mensController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database Connected!");
  } catch (err) {
    console.log(err);
  }
  console.log("Server Listening!");
});
