const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        isParent: Boolean
        isAdmin: Boolean
        parentTwo: String
        student: String
    }

    type Location {
        _id: ID
        row: Int
        position: Int
        ishere: Boolean
        userid: Int
    }

    type Query {
        user: [User]
        location(_id: String): [Location]
    }

    type Mutation {
        createLocation(student: String!, username: String!): User
    }
`

module.exports = typeDefs;