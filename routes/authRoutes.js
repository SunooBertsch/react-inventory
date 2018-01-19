const passport = require("passport");
const keys = require("../config/keys");

module.exports = app => {
  //configuring passport google strategy
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      console.log("req,res", req.user.googleIdnom);
      if (req.user.googleId == keys.googleID) {
        console.log("made it");
        return res.redirect("/" + keys.adminPath);
      }
    }
  );

  app.get("/api/logout", (req, res) => {
    console.log("logged out");
    req.logout();
    res.redirect("/");
  });
};
