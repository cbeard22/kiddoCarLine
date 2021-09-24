const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  row: {
    type: String,
    required: true,
  },
  tech2: {
    type: String,
    required: true,
  },
  
});

const Location = model('Location', locationSchema);

module.exports = Location;
