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
require("./services/passport");

require("./routes/authRoutes")(app);

app.use(staticMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
