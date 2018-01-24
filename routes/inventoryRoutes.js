const mongoose = require("mongoose");
const keys = require("../config/keys");

const requireLogin = require("../middlewares/requireLogin");

const Car = mongoose.model("car");
const AuctionCar = mongoose.model("auctionCar");

module.exports = app => {
  app.post("/cars", (req, res) => {
    console.log("req sent");
    const {
      make,
      model,
      price,
      transmission,
      engine,
      year,
      trimLevel,
      files,
      sold,
      mileage,
      interiorColor,
      exteriorColor,
      vin,
      vehicleType,
      stockNumber,
      drivetrain,
      doors
    } = req.body;

    const car = new Car({
      make,
      model,
      price,
      transmission,
      engine,
      year,
      trimLevel,
      files,
      sold,
      mileage,
      interiorColor,
      exteriorColor,
      vin,
      vehicleType,
      stockNumber,
      drivetrain,
      doors
    }).save();
  });

  app.post("/cars/auction", (req, res) => {
    console.log("req sent");
    const {
      make,
      model,
      price,
      transmission,
      engine,
      year,
      trimLevel,
      files,
      sold,
      mileage,
      interiorColor,
      exteriorColor,
      vin,
      vehicleType,
      stockNumber,
      drivetrain,
      doors
    } = req.body;

    const auctionCar = new AuctionCar({
      make,
      model,
      price,
      transmission,
      engine,
      year,
      trimLevel,
      files,
      sold,
      mileage,
      interiorColor,
      exteriorColor,
      vin,
      vehicleType,
      stockNumber,
      drivetrain,
      doors
    }).save();
  });

  app.get("/cars", (req, res) => {
    Car.find({}, (err, cars) => {
      if (err) throw err;
      res.json(cars);
    });
  });

  app.get("/cars/auction", (req, res) => {
    AuctionCar.find({}, (err, cars) => {
      if (err) throw err;
      res.json(cars);
    });
  });

  app.get("/cars/:carId", (req, res) => {
    Car.find({ _id: req.params.carId }, function(err, results) {
      if (err) throw err;
      res.json(results);
    });
  });
  app.get("/cars/auction/:carId", (req, res) => {
    console.log(req)
    AuctionCar.find({ _id: req.params.carId }, function(err, results) {
      if (err) throw err;
      res.json(results);
    });
  });

  app.post("/cars/deleteInventory", (req, res) => {
    Car.deleteOne({ _id: req.body._id }, function(err, result) {
      console.log(result);
      console.log(err);
    });
  });

  app.post("/cars/deleteAuctionInventory", (req, res) => {
    AuctionCar.deleteOne({ _id: req.body._id }, function(err, result) {
      console.log(result);
      console.log(err);
    });
  });

  app.post("/cars/soldInventory", (req, res) => {
    Car.findById({ _id: req.body._id }, function(err, car) {
      if (err) {
        console.log(err);
      }
      if (car.sold === true) {
        car.set({ sold: false });
        car.save(function(err, updatedCar) {
          if (err) return handleError(err);
        });
        Car.find({}, function(err, cars) {
          res.send(cars);
        });
      } else if (car.sold === false) {
        car.set({ sold: true });
        car.save(function(err, updatedCar) {
          if (err) return handleError(err);
        });
        Car.find({}, function(err, cars) {
          res.send(cars);
        });
      }
    });
  });

  app.post("/cars/soldAuctionInventory", (req, res) => {
    AuctionCar.findById({ _id: req.body._id }, function(err, car) {
      if (err) {
        console.log(err);
      }
      if (car.sold === true) {
        car.set({ sold: false });
        car.save(function(err, updatedCar) {
          if (err) return handleError(err);
        });
        AuctionCar.find({}, function(err, cars) {
          res.send(cars);
        });
      } else if (car.sold === false) {
        car.set({ sold: true });
        car.save(function(err, updatedCar) {
          if (err) return handleError(err);
        });
        AuctionCar.find({}, function(err, cars) {
          res.send(cars);
        });
      }
    });
  });
};
