<script lang="ts">
  import type { Post } from "$lib/generated";
  export let data: { blog: Post };

  console.log(data)
</script>
<h1 class="px-4 py-2 text-white">{data.blog.author?.node.name}</h1>
<p class="px-4 py-2 text-white">{@html data.blog.content}</p>
<img src="{data?.blog?.featuredImage?.node?.sourceUrl}" alt="">