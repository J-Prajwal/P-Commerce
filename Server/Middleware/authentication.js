const jwt = require("jsonwebtoken");
require("dotenv").config;
const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("Please login again!");
  }
  const userToken = req.headers.authorization.split(" ")[1];
  jwt.verify(userToken, process.env.SECRET_KEY, function (err, decoded) {
    if (err) {
      return res.send("Please login again");
    }
    req.body.email = decoded.email;
    req.body.password = decoded.password;
    next();
  });
};

module.exports = authentication;
