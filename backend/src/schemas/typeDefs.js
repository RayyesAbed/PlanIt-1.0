const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }

    type Query {
        getUser(email: String!): User
    }

    type Mutation {
        updateUser(name: String, email: String, password: String, id: ID!): User
    }
`;

module.exports = typeDefs;
