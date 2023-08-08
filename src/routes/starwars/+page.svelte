<!-- <script lang="ts">
  import { __films } from "./+page";

  export let allFilms: any | null = __films?.films;

  function getSpeciesName(speciesConnection: any) {
    if (
      speciesConnection &&
      speciesConnection.species &&
      speciesConnection.species.length > 0
    ) {
      return speciesConnection.species
        .map((species: any) => species.name)
        .join(", ");
    }
    return "";
  }
</script>

<div>
  <h1 class="title-bar">Star Wars Movies</h1>

  <ul>
    {#if allFilms !== null && allFilms.length > 0}
      {#each allFilms as film, index}
        <li class="film-item">
          <div class="film-details">
            <p>{index + 1}: {film?.title}</p>
            <p>Directed By: {film?.director}</p>
            <p>Release Date: {film?.releaseDate}</p>
            <p>Species: {getSpeciesName(film?.speciesConnection)}</p>
          </div>
        </li>
      {/each}
    {/if}
  </ul>
</div> -->



<script lang="ts">
  import { createClient } from "../../generated/films";
  import { onMount } from "svelte";

  const client = createClient({
    url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  });

  export let allFilms: any;

  async function fetchData() {
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

    allFilms = response.allFilms?.films;
  }

  onMount(fetchData);

    function getSpeciesName(speciesConnection: any) {
    if (
      speciesConnection &&
      speciesConnection.species &&
      speciesConnection.species.length > 0
    ) {
      return speciesConnection.species
        .map((species: any) => species.name)
        .join(", ");
    }
    return "";
  }
</script>

<div>
 <h1 class="title-bar">Star Wars Movies</h1>
  {#if typeof allFilms === 'undefined'}
    <p class="px-4 py-2 text-white title-data">Fetching Data...</p>
  {:else if allFilms !== null && allFilms.length > 0}
    <ul>
      {#each allFilms as film, index}
        <li class="film-item">
          <div class="film-details">
            <p>{index + 1}: {film?.title}</p>
            <p>Directed By: {film?.director}</p>
            <p>Release Date: {film?.releaseDate}</p>
            <p>Species: {getSpeciesName(film?.speciesConnection)}</p>
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="px-4 py-2 text-white">No data available.</p>
  {/if}
</div>
