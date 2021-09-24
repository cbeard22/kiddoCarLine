const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        parentOne: String
        parentTwo: String
        car: String
    }

    type Student {
        _id: ID
        student: String
        parentID: ID
    }

    type Query {
        user: [User]
        students(_id: String): [Student]
    }
`

module.exports = typeDefs;