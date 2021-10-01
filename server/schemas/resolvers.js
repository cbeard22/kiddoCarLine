const { User, Location } = require("../models");
const Student = require('../models/Student');
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require('apollo-server-errors');

const resolvers = {
    Query: {
        users: async () => {
            const userData = await User.find({}).populate('students');
            return userData;
        },
        locations: async () => {
            const locationData = await Location.find({ ishere: true }).populate('users');
            return locationData;
        }
    },
    Mutation: {
        login: async (parent, { email, password, isAdmin }) => {
            try {
                const user = await User.findOne({ email, isAdmin });

                if (!user) {
                    throw new AuthenticationError('No user found with this email address');
                }

                const correctPw = await user.isCorrectPassword(password);

                if (!correctPw) {
                    throw new AuthenticationError('Incorrect credentials');
                }

                const token = signToken(user);

                return { token, user };
            } catch (e) {
                console.log(e);
            }
        },
        createUser: async (parent, { parentOne, email, password, student }, context) => {
            const user = await User.create({ email, password, parentOne });

            if (student) {
                const newStudent = await Student.create({
                    student,
                    parent: parentOne
                });

                await User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { students: newStudent._id } }
                );
            }

            const token = signToken(user);
            return { token, user };
        },
        createLocation: async (user, args) => {
            const newLocation = await Location.create(args);
            return { newLocation, user }
        },
        addStudent: async (parent, { student }, context) => {
            if (context.user) {
                const newStudent = await Student.create({
                    student,
                    parent: context.user.username,
                });

                const userData = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { students: newStudent._id } }
                );

                return userData;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
}

module.exports = resolvers;