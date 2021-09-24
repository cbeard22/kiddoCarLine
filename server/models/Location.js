const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    row: {
        type: Number,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
    parent: {
        type: String,
        required: true,
    },
    student: {
        type: String,
        required: true,
    },
});

const Location = model('Location', locationSchema);

module.exports = Location;
