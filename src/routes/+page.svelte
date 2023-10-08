<section>
  <h1>
    Let's bring some <br/>
    <span>native</span> movement <br/>
    to the web
  </h1>
</section>

<style lang="scss">
  section {
    display: flex;
    min-height: 75vh;
    align-items: center;
    justify-content: center;
  }

  h1 {
    text-align: center;
    color: var(--text);
    font-size: 8rem;
    font-weight: 700;
    line-height: 0.9;

    span {
      background: linear-gradient(120deg,var(--primary),var(--accent));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: var(--accent) 0 0 100px;
    }
  }
</style>