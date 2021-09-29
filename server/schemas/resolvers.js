const { User, Location, Student } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
    Query: {
        users: async () => {
            const userData = await User.find({}).populate('students');
            return userData;
        },
        locations: async () => {
            const locationData = await Location.find({ ishere: true }).populate('users');
            return locationData;
        },
        students: async () => {
            const studentData = await Student.find({}).populate('users');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
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