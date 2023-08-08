<!-- <script lang="ts">
  import { onMount } from "svelte";
  import { message } from "$lib/database";

  let posts: any;

  onMount(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await response.json();
  });
</script>

{#if posts}
  <ul class="px-4 py-2 bg-violet-900 text-white">
    {#each posts as post}
      <li><span class="px-4 py-2">{post.id}</span>{post.title}</li>
      <li>
        {message}
        <a
          href="/"
          class="px-4 py-2 background-red-900 hover:backdrop-brightness-100"
          >Go back</a
        >
      </li>
    {/each}
  </ul>
{:else}
  <p class="px-4 py-2 text-white">loading...</p>
{/if} -->


<script lang="ts">
  import { message } from "$lib/database";
  import { setContext } from "svelte";
  import type { PageData } from "./$types";
  import { writable } from "svelte/store";

  export let data: PageData;
  const posts = writable() as any;
  $: posts.set(data.posts);
    setContext("posts", posts);
</script>

<svelte:head>
  <title>User Data</title>
</svelte:head>

{#if data}
  <ul class="px-4 py-2 bg-violet-900 text-white">
    {#each $posts as post}
      <li><span class="px-4 py-2">{post.id}</span>{post.title}</li>
      <li>
        {message}
        <a
          href="/"
          class="px-4 py-2 background-red-900 hover:backdrop-brightness-100"
          >Go back</a
        >
      </li>
    {/each}
  </ul>
{:else}
  <p class="px-4 py-2 text-white">loading...</p>
{/if}
