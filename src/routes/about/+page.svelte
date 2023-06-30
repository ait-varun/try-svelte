<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "../$types";

  export let data: PageData;
  let posts: any;

  onMount(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await response.json();
  });
</script>

{#if posts}
  <ul>
    {#each posts as post}
      <li><span class="px-4 py-2">{post.id}</span>{post.title}</li>
    {/each}
  </ul>
{:else}
  <p class="px-4 py-2">loading...</p>
{/if}
