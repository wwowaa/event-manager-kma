const User = require("../models/user");
const jwt = require("jsonwebtoken");

//handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { username: "", email: "", password: "", confirmPassword: "" };

  //incorrect email
  if (
    err.message === "incorrect email" ||
    err.message === "incorrect password"
  ) {
    errors.password = "Entered information is incorrect, please try again";
  }

  //duplicate user error
  if (err.code === 11000) {
    if (err.message.includes("username")) {
      errors.username = "That username is already registered";
    }
    if (err.message.includes("email")) {
      errors.email = "That email is already registered";
    }
    return errors;
  }

  //validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

//create token
const maxAge = 30 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "andchermeister secret", {
    expiresIn: maxAge,
  });
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.auth_get = (req, res) => {
  res.render("auth");
};

module.exports.signup_post = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
      confirmPassword,
    });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.auth_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email);
  console.log(password);

  try {
    const user = await User.auth(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, username: user.username });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.signout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/auth");
};
