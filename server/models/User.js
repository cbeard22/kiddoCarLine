const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 4, "Password should be longer."]
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  isParent: {
    type: Boolean,
    required: true,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  parentOne: {
    type: String,
    required: true,
    trim: true,
  },
  parentTwo: {
    type: String,
    required: false,
    trim: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
