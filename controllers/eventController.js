const Event = require("../models/event");
const jwt = require("jsonwebtoken");

module.exports.addevent_get = (req, res) => {
  res.render("addevent");
};

//handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {
    eventname: "",
    organiser: "",
    date: "",
    time: "",
    location: "",
    description: "",
  };

  //validation errors
  if (err.message.includes("event validation failed")) {
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

module.exports.addevent_post = async (req, res) => {
  const { eventname, organiser, date, time, location, description } = req.body;

  try {
    const event = await Event.create({
      eventname,
      organiser,
      date,
      time,
      location,
      description,
    });
    const token = createToken(event._id);
    res.cookie("jwt_event", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ event: event._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).send(errors);
  }
};
