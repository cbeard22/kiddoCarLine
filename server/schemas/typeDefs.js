const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        isParent: Boolean
        isAdmin: Boolean
        parentTwo: String
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

    type Mutation {
        login(email: String!, password: String!): Auth,
        createLocation(student: String!, tech2: String!): Location
        createStudent(_id: String!, techNum: Int!): Student
      }
`

module.exports = typeDefs;