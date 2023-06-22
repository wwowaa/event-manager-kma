const { Router } = require('express');
const eventController = require('../controllers/eventController');

const event_router = Router();

event_router.get('/addevent', eventController.addevent_get);
event_router.post('/addevent', eventController.addevent_post);


module.exports = event_router;