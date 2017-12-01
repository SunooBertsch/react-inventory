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
