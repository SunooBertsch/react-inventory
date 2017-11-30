const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireLogin");

const Car = mongoose.model("car");

module.exports = app => {
  app.post("/inventory/add", requireLogin, (req, res) => {
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
    });
  });
};
