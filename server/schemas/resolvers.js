const { User, Location } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
    Query: {
        user: async () => {
            const userData = await User.find({});
            return userData;
        },
        location: async () => {
            const locationData = await Location.find({ishere: true})
            return locationData;
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