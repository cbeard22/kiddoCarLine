const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        password: String!
        email: String!
        isParent: Boolean
        isAdmin: Boolean
        parentTwo: String
        students: [Student]
    }

    type Location {
        _id: ID!
        row: Int!
        position: Int!
        ishere: Boolean
        users: [User]
    }

    type Student {
        _id: ID!
        student: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        students: [Student]
        locations: [Location]
    }

    type Mutation {
        createUser(username: String!, password: String! ): User
        login(email: String!, password: String!): Auth
        createLocation(_id: ID!): Location
    }
`

module.exports = typeDefs;