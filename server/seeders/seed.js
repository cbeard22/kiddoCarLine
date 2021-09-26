const db = require('../config/connection');
const { Location, User } = require('../models');
const UserSeeds = require('./userSeeds.json');
const LocationSeeds = require('./locationSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(UserSeeds);

    await Location.deleteMany({});
    await Location.create(LocationSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
