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



// import type { PageLoad } from "./$types";
// import { createClient } from "../../generated/films";

// export const load = (async ({ fetch }) => {
//   const client = createClient({
//     url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
//   });

//   const response = await client.query({
//     allFilms: {
//       films: {
//         title: true,
//         director: true,
//         releaseDate: true,
//         speciesConnection: {
//           species: {
//             name: true,
//             classification: true,
//             homeworld: {
//               name: true,
//             },
//           },
//         },
//       },
//     },
//   });
//   return {
//     films: response.allFilms?.films,
//   };
// }) satisfies PageLoad;
