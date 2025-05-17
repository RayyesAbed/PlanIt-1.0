const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        confirmedEmail: String!
        password: String!
    }

    type Query {
        getUser(email: String!): User
    }

    type Mutation {
        updateUser(name: String, toBeConfirmedEmail: String, password: String, id: ID!): User
    }
`;

module.exports = typeDefs;
