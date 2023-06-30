<script>
  import { page } from "$app/stores";
</script>

<h1 class="text-2xl text-red-700">
  Sorry mate 😥 {$page.error?.message}!
</h1>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5"
  ><a href="/">Go Home</a></button
>
