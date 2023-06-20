const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventname: {
        type: String,
        required: [true, 'Please enter an event name']
    },
    organiser: {
        type: String,
        required: [true, 'Please enter an organiser of event']
    },
    date: {
        type: Date,
        required: [true, 'Please enter a date']
    },
    time: {
        type: String,
        required: [true, 'Please enter time']
    },
    location: {
        type: String,
        required: [true, 'Please enter a location']
    },
    description: {
        type: String,
        required: [true, 'Please enter an event description']
    }
})

const Event = mongoose.model('event', eventSchema);

module.exports = Event; 