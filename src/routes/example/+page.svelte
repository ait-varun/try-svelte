<script lang="ts">
  import { onMount } from "svelte";
  import { createClient } from "./../../generated";
  import type { Country } from "$lib/apiData";

  let country: Country | null = null;
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

    country = response.country;
    isLoading = false; // Set isLoading to false after fetching the data
    console.log(country)
  });
</script>

<svelte:head>
  <title>Country Data</title>
</svelte:head>

<div>
  {#if isLoading}
    <p class="px-4 py-2 text-white">Loading...</p>
  {:else if country !== null && Object.keys(country).length > 0}
    <!-- check if 'country' object is not empty -->
    <ul>
      <li class="px-4 py-2 text-white">Name: {country.name}</li>
      <li class="px-4 py-2 text-white">Native: {country.native}</li>
      <li class="px-4 py-2 text-white">Capital: {country.capital}</li>
      <li class="px-4 py-2 text-white">Emoji: {country.emoji}</li>
      <li class="px-4 py-2 text-white">Currency: {country.currency}</li>
      <li class="px-4 py-2 text-white">Languages:</li>
      <ul>
        {#each country.languages as language}
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