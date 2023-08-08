import { createClient } from "../../generated/films";

const client = createClient({
  url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
});

const response = await client.query({
  allFilms: {
    films: {
      title: true,
      director: true,
      releaseDate: true,
      speciesConnection: {
        species: {
          name: true,
          classification: true,
          homeworld: {
            name: true,
          },
        },
      },
    },
  },
});

export let __films = response.allFilms;
