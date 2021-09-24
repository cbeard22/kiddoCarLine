const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
  isParent: {
    type: Boolean,
    required: true,
    default: true,
  },
  isAdmin: {
    type: String,
    required: true,
    trim: true,
  },
  parentTwo: {
    type: Number,
    required: false,
    trim: true,
  },
});

const User = model('User', userSchema);

module.exports = User;
