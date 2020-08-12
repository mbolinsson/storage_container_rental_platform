const route = require("express").Router();
const Container = require("../schemas/containerSchema.js");
const mongoose = require("mongoose");

route.post("/addcontainer", (req, res) => {
  console.log("addcontainer");
  try {
    for (current of req.body) {
      let container = new Container({
        _id: new mongoose.Types.ObjectId(),
        location: current.location,
        containerNumber: current.containerNumber,
        isActive: current.isActive,
        customer: current.customer,
        type: current.type,
        m2: current.m2,
        price: current.price,
        customer: current.customer,
      });

      container.save();
    }

    return res.status(200).json("upload successful");
  } catch {
    return res.status(400).json("upload not successful");
  }
});

route.post("/", (req, res) => {
  const filter = req.body;
  console.log(filter);

  Container.find({...filter, isActive: false}).then((containers) => {
    return res.send(containers);
  });
});

route.get("/:id", (req, res) => {
  console.log(req.params.id);
  Container.findOne({_id: req.params.id, isActive: false}).then((container) => {
    return res.send(container);
  });
});

module.exports = route;
