const mongoose = require("mongoose");
const { Schema } = mongoose;

const auctionCarSchema = new Schema({
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
  sellersNotes: String,
  passengerCapacity: String,
  tire: String,
  basicWarranty: String,
  powertrainWarranty: String,
  mpg: String,
  recalls: String
});

mongoose.model("auctionCar", auctionCarSchema);
