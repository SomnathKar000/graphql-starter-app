import { books, authors } from "./data-set.js";

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
};

export { resolvers };
