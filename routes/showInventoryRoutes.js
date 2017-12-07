const mongoose = require("mongoose")
const db = mongoose.connection

module.exports = app => {
  app.get('/cars', (req, res) => {
    const cursor = db.collection('cars').find().toArray(function(err, results) {
      console.log(results)
      res.json(results)
    })
  })

  app.get('/cars/:carId', (req, res) => {
    console.log(req.params.carId)
    const cursor = db.collection('cars').find({ '_id': req.params.carId}, function(err, results) {
      console.log(results)
      console.log(err)
      res.json(results)
    })
  })
}
