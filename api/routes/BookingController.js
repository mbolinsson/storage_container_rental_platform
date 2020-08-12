const route = require("express").Router();
const mongoose = require("mongoose");

route.post("/", (req, res) => {
  const formInfo = req.body;
  res.status(200);
  console.log(formInfo);
});

module.exports = route;
