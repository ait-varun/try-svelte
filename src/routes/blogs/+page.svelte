<!-- <script lang="ts">
	import { nodes } from './../../../.svelte-kit/generated/client/app.js';
	import { Category } from './../../generated/blogs/schema.ts';
  import { __blogs } from "./+page";
  import { onMount } from "svelte";

  export let blogs: any | null = __blogs?.nodes;
  let visibleBlogs: any[] = [];
  let currentIndex = 0;

  const loadMore = () => {
    // Increase the current index and load the next blog
    currentIndex++;
    updateVisibleBlogs();
  };

  const showLess = () => {
    // Decrease the current index and load the previous blog
    currentIndex--;
    updateVisibleBlogs();
  };

  const updateVisibleBlogs = () => {
    // Get the current visible blog based on the current index
    visibleBlogs = blogs ? [blogs[currentIndex]] : [];
  };

  onMount(() => {
    if (blogs && blogs.length > 0) {
      // Initialize the visible blogs with the first blog
      updateVisibleBlogs();
    }
  });
</script>

<div>
  <ul>
    {#each visibleBlogs as blog, index}
      <li class="film-item">
        <div class="film-details">
          <p>{currentIndex + 1}: {blog?.author.node.name}</p>
          <img
            src={blog?.author.node.avatar.url}
            alt="avatar"
            style="width: 50px; height:50px"
          />
          <p>{blog?.title}</p>
          <p>{@html blog?.content}</p>
        </div>
      </li>
    {/each}
  </ul>
  {#if blogs !== null && blogs.length > 1}
    <div>
      {#if currentIndex > 0}
        <button
          class="px-4 py-2 bg-violet-900 hover:backdrop-brightness-100"
          on:click={showLess}
        >
          Show Less
        </button>
      {/if}
      {#if currentIndex < blogs.length - 1}
        <button
          class="px-4 py-2 bg-violet-900 hover:backdrop-brightness-100"
          on:click={loadMore}
        >
          Load More
        </button>
      {/if}
    </div>
  {/if}
</div> -->

<!-- <script lang="ts">
  import { __blogs } from "./+page";
  import { onMount } from "svelte";

  export let blogs: any | null = __blogs?.nodes;
  let currentIndex = 0;

const loadMore = () => {
  if (blogs && currentIndex === blogs.length - 1) {
    // If current index is at the last blog, go back to the first blog
    currentIndex = 0;
  } else if (blogs && currentIndex < blogs.length - 1) {
    // Increment the current index to show the next blog
    currentIndex++;
  }
};

  onMount(() => {
    if (blogs && blogs.length > 0) {
      // Initialize the current index to show the first blog
      currentIndex = 0;
    }
  });
</script>

<div>
  <ul>
    {#if blogs !== null && blogs.length > 0}
      <li class="film-item">
        <div class="film-details">
          <p>{currentIndex + 1}: {blogs[currentIndex]?.author.node.name}</p>
          <img
            src={blogs[currentIndex]?.author.node.avatar.url}
            alt="avatar"
            style="width: 50px; height:50px"
          />
          <p>{blogs[currentIndex]?.title}</p>
          <p>{@html blogs[currentIndex]?.content}</p>
        </div>
      </li>
      <div>
        <button
          class="px-4 py-2 bg-rose-700 "
          on:click={loadMore}
        >
          Load More
        </button>
      </div>
    {/if}
  </ul>
</div> -->

<!-- <script lang="ts">
  import { onMount } from "svelte";
  import type { Post, Category } from "$lib/generated";
  export let data: { blogs: Post[], categories: Category[] };

  const { blogs, categories }: { blogs: Post[], categories: Category[] } = data;

    let currentIndex = 0;

const loadMore = () => {
  if (blogs && currentIndex === blogs.length - 1) {
    currentIndex = 0;
  } else if (blogs && currentIndex < blogs.length - 1) {
    currentIndex++;
  }
};

  onMount(() => {
    if (blogs && blogs.length > 0) {
      currentIndex = 0;
    }
  });
</script>



<table>
  <thead>
    <tr>
      <th class="px-2 text-white ">Category Name</th>
      <th class="px-2 text-white ">Count</th>

    </tr>
  </thead>
  <tbody>
    {#each categories as category (category.id)}
      <tr>
        <td class="px-2 text-white">{category.name}</td>
        <td class="px-2 text-white">{category.count}</td>
      </tr>
    {/each}
  </tbody>
</table>

<div>
  <ul>
    {#if blogs !== null && blogs.length > 0}
      <li class="film-item">
        <div class="film-details">
          <p>{currentIndex + 1}: {blogs[currentIndex]?.author?.node.name}</p>
          <img
            src={blogs[currentIndex]?.author?.node?.avatar?.url}
            alt="avatar"
            style="width: 50px; height:50px"
          />
          <p>{blogs[currentIndex]?.title}</p>
          <p>{@html blogs[currentIndex]?.content}</p>
        </div>
      </li>
      <div>
        <button
          class="px-4 py-2 bg-rose-700 "
          on:click={loadMore}
        >
          Load More
        </button>
      </div>
    {/if}
  </ul>
</div> -->

<script lang="ts">
  import { onMount } from "svelte";
  import type { Post, Category } from "$lib/generated";
  export let data: { blogs: Post[]; categories: Category[] };

  const { blogs }: { blogs: Post[]; categories: Category[] } = data;

  let currentIndex = 0;
  const loadMore = () => {
    if (blogs && currentIndex === blogs.length - 1) {
      currentIndex = 0;
    } else if (blogs && currentIndex < blogs.length - 1) {
      currentIndex++;
    }
  };

  onMount(() => {
    if (blogs && blogs.length > 0) {
      currentIndex = 0;
    }
  });

  let selectedCategory: any = { name: "All" };
  let uniqueCategories: any = [];
  function handleCategoryClick(category: any) {
    selectedCategory = category;
  }

  $: {
    // Create an array of unique categories
    const categorySet = new Set();
    uniqueCategories = blogs.flatMap((blog) =>
      blog.categories?.nodes.filter((cat) => {
        if (!categorySet.has(cat.name)) {
          categorySet.add(cat.name);
          return true;
        }
        return false;
      })
    );
  }
</script>

<svelte:head>
  <title>Blogs</title>
</svelte:head>

<div>
  <ul>
    {#if blogs !== null && blogs.length > 0}
      <li class="film-item">
        <div class="film-details">
          <p>{currentIndex + 1}: {blogs[currentIndex]?.author?.node.name}</p>
          <img
            src={blogs[currentIndex]?.author?.node?.avatar?.url}
            alt="avatar"
            style="width: 50px; height:50px"
          />
          <p>{blogs[currentIndex]?.title}</p>
          <p>{@html blogs[currentIndex]?.content}</p>
        </div>
      </li>
      <div>
        <button class="px-4 py-2 bg-rose-700" on:click={loadMore}>
          Load More
        </button>
      </div>
    {/if}
  </ul>
</div>

<ul class="bg-violet-900 flex">
  <li>
    <button class="text-white" on:click={() => handleCategoryClick({ name: "All" })}>
      Show All :
    </button>
    <span class="px-2 text-white">{blogs.length} |</span>
  </li>
  {#each uniqueCategories as cat}
    <li>
      <button class="text-white" on:click={() => handleCategoryClick(cat)}>{cat.name} :</button>
      <span class="px-2 text-white">{cat.count} |</span>
    </li>
  {/each}
</ul>

{#if selectedCategory !== null}
  <div class="bg-violet-900 p-4">
    <h3 class="text-white mb-4">
      Filtered Blogs for Category: {selectedCategory.name}
    </h3>
    <ul>
      {#each selectedCategory.name !== "All" ? 
        blogs.filter((blog) => blog.categories?.nodes.some((cat) => cat.name === selectedCategory?.name)) :
        blogs as blog}
        <li class="mb-4">
          <h4 class="text-white text-lg font-bold"><a href="/blogs/{blog.slug}">{blog.title}</a></h4>
          <p class="text-white">{@html blog.content}</p>
        </li>
      {/each}
    </ul>
  </div>
{/if}
