import { books } from "./data-set.js";

const resolvers = {
  Query: {
    books: () => books,
  },
};

export { resolvers };
