<script lang="ts">
  const sentences = [
    "Let's bring some <br/><span>native</span> movement <br/>to the web",
    "Harness innovation to <span>revolutionize</span> <br/>user interactions <br/>on the web",
    "Infuse your websites with the allure of <span>intuitive</span> navigation.",
    "Hi <span>Mom</span> 👋",
    "A bit of a <span>hangover</span> from yesterday",
    "You wanna <br/>keep <span>clicking?</span><br/> Go your gang!"
  ]
  let h1: HTMLHeadingElement;
  let index = 0;

  const nextSentence = () => {
    index = ++index % sentences.length;
  }
</script>

<section>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <h1 on:click={nextSentence} bind:this={h1}>
    {@html sentences[index]}
  </h1>
</section>

<style lang="scss">
  section {
    display: flex;
    min-height: 75vh;
    align-items: center;
    justify-content: center;
    text-wrap: balance;
    user-select: none;
  }

  h1 {
    text-align: center;
    color: var(--text);
    font-size: 8rem;
    font-weight: 900;
    line-height: 0.9;
  }
  :global(h1 > span) {
    background: linear-gradient(120deg,var(--primary),var(--accent));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: var(--accent) 0 0 100px;
  }
</style>