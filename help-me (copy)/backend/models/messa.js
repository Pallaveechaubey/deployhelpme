const mongoose = require("mongoose");

const messSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  sendemail:String
});

const Messa = mongoose.model("Messa", messSchema);
module.exports = Messa;
