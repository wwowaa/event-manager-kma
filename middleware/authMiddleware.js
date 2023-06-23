const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json token exists & is verified
  if (token) {
    jwt.verify(token, "andchermeister secret", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/auth");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/auth");
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  //   console.log(req.cookies.jwt);

  if (token) {
    jwt.verify(token, "andchermeister secret", async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        console.log(decodedToken);
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
