const route = require("express").Router();
const mongoose = require("mongoose");
const {mailSender} = require("../utils/mailsender");
const {checkIfHuman} = require("../utils/checkIfHuman");

route.post("/", async (req, res) => {
  // Checks for bots.
  let isHuman = await checkIfHuman(req);
  if (!isHuman) {
    return res.status(418);
  }

  // Sends customer form to mail
  mailSender(req);

  res.status(200).send(isHuman);
});

module.exports = route;
