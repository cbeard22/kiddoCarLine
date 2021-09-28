const db = require('../config/connection');
const { Location, User, Student } = require('../models');
const UserSeeds = require('./userSeeds.json');
const LocationSeeds = require('./locationSeeds.json');
const studentSeeds = require('./studentSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(UserSeeds);

    await Location.deleteMany({});
    await Location.create(LocationSeeds);

    await Student.deleteMany({});
    await Student.create(studentSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
