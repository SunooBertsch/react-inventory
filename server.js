const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, 'client/public')
const staticMiddleware = express.static(publicPath)
const jsonParser = bodyParser.json()

app.use(staticMiddleware)

app.use(jsonParser)

const MongClient = require('mongodb').MongoClient
let db
MongoClient.connect('mongodb://chris-voss:Uudyov123@ds255265.mlab.com:55265/project-cars', (err, database) => {
  if (err) {
    return console.log(err)
  }
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.post('/cars', (req, res) => {
  db.collection('cars').save(req.body, (err, result) => {
    if (err) {
      return console.log(err)
    }
    console.log('saved to database')
    res.redirect('/')
  })
})
