require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL,() => {
  console.log('connected!')
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {

})

const Schema = mongoose.Schema

const vehicleSchema = new Schema({
  Make: String,
  Model: String,
  Year: String,
  VIN: String,
  Engine: String,
  Transmission: String,
  Images: String,
  Description: String
})
