const mongoose = require("mongoose");

function isActive() {
  return this.isActive === true;
}

const containerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  location: {type: String, required: true},
  containerNumber: {type: Number, required: true},
  isActive: {type: Boolean, required: true},
  type: {type: String, required: true},
  m2: {type: Number, required: true},
  price: {type: Number, required: true},
  customer: {
    name: {
      type: String,
      required: function () {
        return this.isActive === true;
      },
    },
    surname: {
      type: String,
      required: function () {
        return this.isActive === true;
      },
    },
    phonenumber: {
      type: Number,
      required: function () {
        return this.isActive === true;
      },
    },
    email: {
      type: String,
      required: function () {
        return this.isActive === true;
      },
    },
    streetAdress: {
      type: String,
      required: function () {
        return this.isActive === true;
      },
    },
    city: {
      type: String,
      required: function () {
        return this.isActive === true;
      },
    },
  },
});

const Container = mongoose.model("Container", containerSchema);

module.exports = Container;
