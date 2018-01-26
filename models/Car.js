const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  make: String,
  model: String,
  price: String,
  mileage: String,
  drivetrain: String,
  doors: String,
  transmission: String,
  engine: String,
  year: String,
  trimLevel: String,
  files: Array,
  vehicleType: String,
  stockNumber: String,
  vin: String,
  interiorColor: String,
  exteriorColor: String,
  sold: Boolean,
  sellersNotes: String
});

mongoose.model("car", carSchema);
