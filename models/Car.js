const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  make: String,
  model: String,
  price: String,
  transmission: String,
  engine: String,
  year: Number,
  trimLevel: String,
  files: Array,
  sold: Boolean
});

mongoose.model("car", carSchema);
