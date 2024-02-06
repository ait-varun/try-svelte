<script>
  import "../assets/sass/main.scss";
  import Nav from "../components/nav.svelte";
</script>


<svelte:head>
  <title>User Data</title>
</svelte:head>

<div>
  <div class="sticky-navbar">
    <Nav />
  </div>
  <slot />
</div>