<script>
  import { blur } from "svelte/transition";
  let condition = false;
  let big = false;
  let show = () => {
    condition = !condition;
  };
</script>

<h1 class="text-color">About</h1>
<h1>Green</h1>
<button on:click={show} class="transition-button">See Transition</button>
{#if condition}
  <div transition:blur={{ amount: 10 }}>
    fades in and out
    <div class="new-tab"><p>New Tab</p></div>
  </div>
{/if}

<div class="max-w-4xl mx-auto">
  <button on:click={() => (big = !big)}>click</button>

  <div class:big>
    some {big ? "big" : "small"} text
  </div>
</div>

<style>
  .big {
    font-size: 4em;
  }
</style>
