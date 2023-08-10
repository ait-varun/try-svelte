<!-- <script lang="ts">
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

<script lang="ts">
  import { __blogs } from "./+page";
  import { onMount } from "svelte";

  export let blogs: any | null = __blogs?.nodes;
  let currentIndex = 0;

  const loadMore = () => {
    // Increment the current index to show the next blog
    if (blogs && currentIndex < blogs.length - 1) {
      currentIndex++;
    }
  };

  const showLess = () => {
    // Decrement the current index to show the previous blog
    if (currentIndex > 0) {
      currentIndex--;
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
          class="px-4 py-2 bg-green-700 "
          on:click={showLess}
        >
          Show Less
        </button>
        <button
          class="px-4 py-2 bg-rose-700 "
          on:click={loadMore}
        >
          Load More
        </button>
      </div>
    {/if}
  </ul>
</div>
