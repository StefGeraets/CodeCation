<article class="content">
  <h1>About this demo</h1>
  <p class="lead">
    This demo is build for <a href="https://kabisa.nl/" target="_blank">Kabisa's</a> CodeCation. 
    And is used to inform colleagus on new browser native web animations that where previously only possible with javascript.
    
  </p>

  <section>
    <div>
      <h3>Content Resources</h3>
      <ul>
        <li>Blog titles: <a target="_blank" href="https://openai.com" rel="external">ChatGPT</a></li>
        <li>Blog content: <a target="_blank" href="http://fillerama.io/" rel="external">Futurama</a></li>
        <li>ScrollDemo content: <a target="_blank" href="https://en.wikipedia.org/wiki/Virtual_reality" rel="external">Wikipedia</a></li>
        <li>Images: <a target="_blank" href="https://www.pexels.com/" rel="external">Pexels</a></li>
      </ul>

      <h3>Repo's</h3>
      <ul>
        <li>Starting Repo: <a target="_blank" href="https://github.com" rel="external">Repo</a></li>
        <li>Final Repo (with animations): <a target="_blank" href="https://github.com" rel="external">Repo</a></li>
      </ul>
    </div>
    <div>
      <h3>Dev Resources</h3>
      <ul>
        <li>Framework: <a target="_blank" href="https://kit.svelte.dev/" rel="external">Sveltekit</a></li>
        <li>Colors: <a target="_blank" href="https://www.realtimecolors.com/" rel="external">Realtime Colors</a></li>
        <li>Icons: <a target="_blank" href="https://tabler-icons.io/" rel="external">Tabler</a></li>
        <li>Hosting: <a target="_blank" href="https://vercel.com/" rel="external">Vercel</a></li>
      </ul>
    </div>
  </section>
</article>

<style lang="scss">
  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5em;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    li {
      display: flex;
      justify-content: space-between;
    }
  }
</style>