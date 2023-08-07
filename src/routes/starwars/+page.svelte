<script lang="ts">
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
  <ul>
    {#if allFilms !== null && allFilms.length > 0}
      {#each allFilms as film}
        <li class="px-4 py-2 text-white">
          Title: {film?.title}, Directed By: {film?.director}
        </li>
        <li class="px-4 py-2 text-white">
          Release Date: {film?.releaseDate}
        </li>
        <li class="px-4 py-2 text-white">
          Species: {getSpeciesName(film?.speciesConnection)}
        </li>
      {/each}
    {/if}
  </ul>
</div>
