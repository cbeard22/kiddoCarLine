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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Location = model('Location', locationSchema);

module.exports = Location;
