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

      <h3>API's and techiques</h3>
      <ul>
        <li>View transitions: <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API" rel="external">MDN</a></li>
        <li>View transitions: <a target="_blank" href="https://developer.chrome.com/docs/web-platform/view-transitions/" rel="external">Google Developer</a></li>
        <li>Scroll animations: <a target="_blank" href="https://developer.chrome.com/articles/scroll-driven-animations/" rel="external">Chome</a></li>
        <li>Scroll Demo: <a target="_blank" href="https://scroll-driven-animations.style/" rel="external">Bramus</a></li>
        <li>Scroll Tool: <a target="_blank" href="https://scroll-driven-animations.style/tools/view-timeline/ranges/#range-start-name=cover&range-start-percentage=0&range-end-name=cover&range-end-percentage=100&view-timeline-axis=block&view-timeline-inset=0&subject-size=smaller&subject-animation=reveal&interactivity=clicktodrag&show-areas=yes&show-fromto=yes&show-labels=yes" rel="external">Tool</a></li>
        <li>Awesome Demo: <a target="_blank" href="https://live-transitions-sda.netlify.app/" rel="external">By Bramus</a></li>
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

      <h3>Repo's</h3>
      <ul>
        <li>Starting Repo: <a target="_blank" href="https://github.com/StefGeraets/CodeCation/tree/main" rel="external">Repo</a></li>
        <li>Final Repo (with animations): <a target="_blank" href="https://github.com/StefGeraets/CodeCation/tree/final" rel="external">Repo</a></li>
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