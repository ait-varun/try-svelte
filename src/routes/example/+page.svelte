<script lang="ts">
  import { onMount } from "svelte";
  import { createClient } from "./../../generated";
  import type { Country } from "./../../generated";

  let countries: Country | null = null;
  let isLoading = true;

  onMount(async () => {
    const client = createClient({
      url: "https://countries.trevorblades.com",
    });

    const response = await client.query({
      country: {
        __args: {
          code: "BR",
        },
        name: true,
        native: true,
        capital: true,
        emoji: true,
        currency: true,
        languages: {
          code: true,
          name: true,
        },
      },
    });

    countries = response.country as Country;
    isLoading = false; // Set isLoading to false after fetching the data
  });
</script>

<svelte:head>
  <title>Country Data</title>
</svelte:head>

<div>
  {#if isLoading}
    <p class="px-4 py-2 text-white">Loading...</p>
  {:else if countries !== null && Object.keys(countries).length > 0}
    <!-- check if 'country' object is not empty -->
    <ul>
      <li class="px-4 py-2 text-white">Name: {countries.name}</li>
      <li class="px-4 py-2 text-white">Native: {countries.native}</li>
      <li class="px-4 py-2 text-white">Capital: {countries.capital}</li>
      <li class="px-4 py-2 text-white">Emoji: {countries.emoji}</li>
      <li class="px-4 py-2 text-white">Currency: {countries.currency}</li>
      <li class="px-4 py-2 text-white">Languages:</li>
      <ul>
        {#each countries.languages as language}
          <!-- loop through the 'languages' array -->
          <li class="px-8 py-2 text-white">
            {language.name} - {language.code}
          </li>
        {/each}
      </ul>
    </ul>
  {:else}
    <p class="px-4 py-2 text-white">NO DATA FOUND</p>
  {/if}
</div>