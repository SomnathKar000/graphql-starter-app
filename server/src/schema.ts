const typeDefs = `#graphql
    type Author {
        id: ID!
        name: String!

    }

    type Book {
        id: ID!
        title: String!
        publishedYear: Int
    }

    type Query {
        books: [Book]
        authors: [Author]
    }

    type Mutation {

    }
`;

export { typeDefs };
