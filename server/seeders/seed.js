const db = require('../config/connection');
const { User } = require('../models/');
const Student = require('../models/Student');
const userSeeds = require('./userSeeds.json');
const studentSeeds = require('./studentSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Student.deleteMany({});

    await User.create(userSeeds);

    for (let i=0; i < studentSeeds.length; i++) {
      const { _id, parent } = await Student.create(studentSeeds[i]);
      const user = await User.findOneAndUpdate(
        {
          parentOne: parent
        },
        {
          $addToSet: {
            students: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
