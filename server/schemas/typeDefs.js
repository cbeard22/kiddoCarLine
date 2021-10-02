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
        userID: String!
    }

    type Student {
        _id: ID!
        parent: String
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
        locations(ishere: Boolean!): [Location]
    }

    type Mutation {
        createUser(parentOne: String!, email: String!, password: String!, student: String): Auth
        login(email: String!, password: String!, isAdmin: Boolean!): Auth
        createLocation(row: Int, position: Int, userID: String!): Location
        addStudent(student: String!): Student
    }
`

module.exports = typeDefs;