const Event = require("../models/event");

async function eventHandler(req, res, next) {
  try {
    const eventId = req.params.eventId;
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).send("Event not found");
    }

    res.locals.event = event;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  eventHandler,
};
