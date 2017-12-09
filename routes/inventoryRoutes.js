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
      trimLevel
    } = req.body;

    const car = new Car({
      make,
      model,
      price,
      transmission,
      engine,
      year,
      trimLevel
    }).save();
  });
};

module.exports = app => {
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
