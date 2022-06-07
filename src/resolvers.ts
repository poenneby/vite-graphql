const resolvers = {
  books: () => {
    return [
      {
        title: "Mandalorian",
        author: { name: "Phil Szostak", books: [] },
      },
    ];
  },
  authors: () => {
    return [
      {
        name: "Phil Szostak",
        books: [{ title: "Mandalorian", author: { name: "Phil Szostak" } }],
      },
    ];
  },
};

export default resolvers;
