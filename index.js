const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const keys = require("./config/keys");
const publicPath = path.join(__dirname, "client/public");
const staticMiddleware = express.static(publicPath);
const jsonParser = bodyParser.json();
require("dotenv").config();
require("./models/User");
require("./services/passport");
require("./models/Survey");

const app = express();

app.use(staticMiddleware);

app.use(jsonParser);

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/cars", (req, res) => {
  db.collection("cars").save(req.body, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log("saved to database");
    res.redirect("/");
  });
});

const MongClient = require("mongodb").MongoClient;
let db;
MongoClient.connect(process.env.DB_URL, (err, database) => {
  if (err) {
    return console.log(err);
  }
  db = database;
  app.listen(3000, () => {
    console.log("listening on 3000");
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
