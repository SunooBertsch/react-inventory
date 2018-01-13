const mongoose = require("mongoose");

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
    Car.find({ _id: req.params.carId }, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

  app.get("/car-auctions", (req, res) => {
    Car.find({}, (err, cars) => {
      if (err) throw err;
      res.json(cars);
    });
  });

  app.get("/car-auctions/:carId", (req, res) => {
    Car.find({ _id: req.params.carId }, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

  app.post("/cars/deleteInventory", (req, res) => {
    console.log("here is the id:" + req.body._id);
    Car.deleteOne({ _id: req.body._id }, function(err, result) {
      console.log(result);
      console.log(err);
    });
    res.redirect("/inventory");
  });
};
