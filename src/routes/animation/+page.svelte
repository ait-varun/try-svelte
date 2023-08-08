<script lang="ts">
  import { tick } from "svelte";
  // @ts-ignore
  import { gsap } from "gsap/dist/gsap";
  // @ts-ignore
  import { Flip } from "gsap/dist/Flip";

  gsap.registerPlugin(Flip);
  // selected image
  let selected = 0;

  async function flip(id: number) {
    // record the initial state
    const state = Flip.getState(".grid-item");

    // change selected image
    selected = id;
    // wait for DOM updates
    await tick();
    // flip
    Flip.from(state, {
      duration: 0.6,
      stagger: 0.04,
      absolute: true,
    });
  }
</script>
<svelte:head>
  <title>Animations</title>
</svelte:head>

<div class="grid">
  {#each { length: 8 } as _, id}
    {@const details = selected === id}
    {@const number = id + 1}

    <button class="grid-item" class:details on:click={() => flip(id)}>
      <div class="title">
        <h1>Image {number}</h1>
      </div>

      <img src="https://picsum.photos/600/600?random={id}" alt="Placeholder" />
    </button>
  {/each}
</div>
