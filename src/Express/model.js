const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const daySchema = new Schema({
  id: String,
  project: String,
  task: String,
  mon: Number,
  tue: Number,
  wed: Number,
  thr: Number,
  fri: Number,
  sat: Number,
  sun: Number
});


const users = mongoose.model("users", daySchema);
module.exports= users;