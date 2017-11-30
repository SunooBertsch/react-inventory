const passport = require("passport");

module.exports = app => {
  //configuring passport google strategy
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
};
