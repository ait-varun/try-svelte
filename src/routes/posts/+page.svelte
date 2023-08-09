<script lang="ts">
  import { __blogs } from "./+page";

  export let blogs: any | null = __blogs?.nodes;
</script>

<div>

  <ul>
    {#if blogs !== null && blogs.length > 0}
      {#each blogs as blog, index}
        <li class="film-item">
          <div class="film-details">
            <p>{index + 1}: {blog?.author.node.firstName}</p>
            <img src={blog?.author.node.avatar.url} alt="avatar" style="width: 50px; height:50px">
          </div>
        </li>

      {/each}
    {/if}
  </ul>
</div>