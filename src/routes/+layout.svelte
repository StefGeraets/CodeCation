<script lang="ts">
	import Header from "$lib/components/Header.svelte";
  import "../styles/index.scss";
</script>

<main>
  <Header />
  <div class="container">
    <slot />
  </div>
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    width: 100vw;
    background-color:var(--background);
    color: var(--text);
    padding-top: 100px;
    padding-bottom: 80px;
    box-sizing: border-box;
  }

  .container {
    width: min(80vw, 1536px);
    margin: 0 auto;
  }
</style>