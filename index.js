const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const passport = require("passport");
const publicPath = path.join(__dirname, "client/public");
const staticMiddleware = express.static(publicPath);
require("dotenv").config();

mongoose.connect(keys.mongoURI);

const db = mongoose.connection

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    // Sets cookie to last 30 days in milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./models/User");
require("./models/Car");
require("./services/passport");
require("./routes/authRoutes")(app);
require("./routes/inventoryRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(staticMiddleware);

app.get('/cars', (req, res) => {
  const cursor = db.collection('cars').find().toArray(function(err, results) {
    console.log(results)
  })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
