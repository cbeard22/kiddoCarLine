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
    ishere: {
        type: Boolean,
        required: true,
        default: true,
    },
    userID: {
        type: String,
        required: true,
    }
});

const Location = model('Location', locationSchema);

module.exports = Location;
