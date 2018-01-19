const mongoose = require("mongoose");
const keys = require("../config/keys");

const requireLogin = require("../middlewares/requireLogin");

const Car = mongoose.model("car");

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
      files
    } = req.body;

    const car = new Car({
      make,
      model,
      price,
      transmission,
      engine,
      year,
      trimLevel,
      files
    }).save();
  });
  app.get("/cars", (req, res) => {
    Car.find({}, (err, cars) => {
      if (err) throw err;
      res.json(cars);
    });
  });

  app.get("/cars/:carId", (req, res) => {
    console.log("here is the id:" + req.params.carId);
    Car.find({ _id: req.params.carId }, function(err, results) {
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

  app.post("/cars/soldInventory", (req, res) => {
    console.log("here is the id:" + req.body._id);
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
          res.send(cars)
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
};
