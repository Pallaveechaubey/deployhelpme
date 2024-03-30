const mongoose = require("mongoose");

const messSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  recipient:String

});

const Messa = mongoose.model("Messa", messSchema);
module.exports = Messa;
