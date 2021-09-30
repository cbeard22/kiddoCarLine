const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        password: String!
        email: String!
        isParent: Boolean
        isAdmin: Boolean
        parentOne: String!
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
        parentOne: String
        student: String
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        users: [User]
        username(parentOne: String!): User
        students: [Student]
        locations: [Location]
    }

    type Mutation {
        createUser(email: String!, password: String! ): User
        login(email: String!, password: String!): Auth
        createLocation(_id: ID!): Location
    }
`

module.exports = typeDefs;