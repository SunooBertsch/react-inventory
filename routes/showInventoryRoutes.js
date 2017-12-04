const mongoose = require("mongoose")
const db = mongoose.connection

module.exports = app => {
  app.get('/cars', (req, res) => {
    const cursor = db.collection('cars').find().toArray(function(err, results) {
      console.log(results)
      res.json(results)
    })
  })
}
