const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, 'client/public')
const staticMiddleware = express.static(publicPath)
const jsonParser = bodyParser.json()

app.use(staticMiddleware)

app.use(jsonParser)
