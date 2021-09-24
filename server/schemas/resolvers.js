const { User } = require("../models");
const { signToken } =require("../utils/auth");

const resolvers = {
    Query: {
        activeUser: async () => {
            
                const userData = await User.find({});
                return userData
        
        }
    },

    Mutation: {
        createUser: async (parent, args) => {
            const newUser = await User.create(args);
            const token = signToken(newUser)

            return { token, user }
        }
    }
}

module.exports = resolvers