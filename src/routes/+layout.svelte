<script lang="ts">
	import Header from "$lib/components/Header.svelte";
  import "../styles/index.scss";

  import { onNavigate } from '$app/navigation';

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<main>
  <Header />
  <div class="container">
    <slot />
  </div>
</main>

<style lang="scss">

  :global(:root)::view-transition-old(main) {
    animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 500ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }
  
  :global(:root)::view-transition-new(main) {
    animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, 500ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }

  @keyframes fade-out {
    to {opacity: 0;}
  }
  @keyframes fade-in {
    from {opacity: 1;}
  }

  @keyframes slide-from-right {
    from { transform: translateY(30px)}
  }
  @keyframes slide-to-left {
    to { transform: translateY(-30px)}
  }

  main {
    min-height: 100vh;
    width: 100vw;
    background-color:var(--background);
    color: var(--text);
    padding-top: 100px;
    padding-bottom: 80px;
    box-sizing: border-box;
    view-transition-name: main;
  }

  .container {
    width: min(80vw, 1536px);
    margin: 0 auto;
  }
</style>