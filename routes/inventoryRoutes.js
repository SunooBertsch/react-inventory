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
};

module.exports = app => {
<<<<<<< HEAD
  app.get('/cars', (req, res) => {
    Car.find({}, (err, cars) => {
      if (err) throw err
      res.json(cars)
    })
  })

  app.get('/cars/:carId', (req, res) => {
    Car.find({ '_id': req.params.carId}, function(err, results) {
      if (err) throw err
      res.json(results)
    })
  })
}
=======
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
      console.log("Here is the car:" + results);
      res.json(results);
    });
  });
};
>>>>>>> eafa9ef47870abc21f5a18840c103cf3b31ff7e8
