<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let pageX: number;
  let pageY: number;
  let mouseY = 0 as number;
  let mouseX = 0 as number;

  onMount(() => {
    const handleMouseMove = (event: any) => {
      // verticalAxis
      mouseY = event.pageY;
      const yAxis = ((pageY / 2 - mouseY) / pageY) * 300;

      // horizontalAxis
      mouseX = event.pageX / -pageX;
      const xAxis = -mouseX * 100 - 100;

      const ghostEyes = document.querySelector(
        ".box__ghost-eyes"
      ) as HTMLDivElement;
      ghostEyes
        ? (ghostEyes.style.transform = `translate(${xAxis}%, -${yAxis}%)`)
        : null;
    };

    pageX = document.documentElement.clientWidth || document.body.clientWidth;
    pageY = document.documentElement.clientHeight || document.body.clientHeight;

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
</script>

<div class="box">
  <div class="box__ghost">
    <div class="symbol" />
    <div class="symbol" />
    <div class="symbol" />
    <div class="symbol" />
    <div class="symbol" />
    <div class="symbol" />

    <div class="box__ghost-container">
      <div class="box__ghost-eyes">
        <div class="box__eye-left" />
        <div class="box__eye-right" />
      </div>
      <div class="box__ghost-bottom">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
    <div class="box__ghost-shadow" />
  </div>

  <div class="box__description">
    <div class="box__description-container">
      <div class="box__description-title">Whoops!</div>
      <div class="box__description-text">
        It seems like we couldn't find the data you were looking for. {$page
          .error?.message}!
      </div>
    </div>
    <!-- link options : data-sveltekit-reload , data-sveltekit-preload , data-sveltekit-replace
    state...will replace the current history entry rather than creating a new one
    with pushState when the link is clicked.  -->
    <a data-sveltekit-reload href="/" class="box__button">Go back</a>
  </div>
</div>
