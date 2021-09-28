const { User, Location, Student } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
    Query: {
        users: async () => {
            const userData = await User.find({}).populate('students');
            return userData;
        },
        locations: async () => {
            const locationData = await Location.find({ishere: true}).populate('users');
            return locationData;
        },
        students: async () => {
            const studentData = await Student.find({}).populate('users');
        }
    },
    Mutation: {
        createUser: async (user, args) => {
            const newUser = await User.create(args);
            const token = signToken(newUser);

            return { token, user }
        },
        createLocation: async (user, args) => {
            const newLocation = await Location.create(args);
            return { newLocation, user }
        },

    }
}

module.exports = resolvers;