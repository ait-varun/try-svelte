<script lang="ts">
  import { page } from "$app/stores";

  // Reactive statement that updates 'path' whenever 'page.url.pathname' changes
  $: path = $page.url.pathname;
</script>

<nav class="bg-blue-900 shadow-lg">
  <div class="container mx-auto">
    <div class="sm:flex">
      <a href="/" class="text-white text-3xl font-bold p-3">APP LOGO</a>

      <!-- Menus -->
      <div class="ml-55 mt-4">
        <ul class="text-white sm:self-center text-xl">
          <li class="sm:inline-block nav-btn" class:active={path === "/"}>
            <a href="/" class="p-3 hover:text-red-900">Home</a>
          </li>
          <li class="sm:inline-block nav-btn" class:active={path === "/about"}>
            <a href="/about" class="p-3 hover:text-red-900">About</a>
          </li>
          <li
            class="sm:inline-block nav-btn"
            class:active={path === "/animation"}
          >
            <a href="/animation" class="p-3 hover:text-red-900">Animation</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
