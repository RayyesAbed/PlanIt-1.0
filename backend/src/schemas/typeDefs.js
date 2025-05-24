const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        confirmedEmail: String!
        toBeConfirmedEmail: String
        password: String!
    }

    type Query {
        getUser(confirmedEmail: String!): User
    }

    type Mutation {
        updateUser(name: String, toBeConfirmedEmail: String ,id: ID!): User
        updatePassword(oldPassword: String, newPassword: String, id: ID!): User
    }
`;

module.exports = typeDefs;
