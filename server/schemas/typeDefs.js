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
        createLocation(student: String!, tech2: String!): User
        createStudent(_id: String!, techNum: Int!): User
    }
`

module.exports = typeDefs;