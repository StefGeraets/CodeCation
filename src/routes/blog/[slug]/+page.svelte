<script lang="ts">
	export let data;
</script>

<header>
  <div class="intro">
    <a href="/blog"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M15 6l-6 6l6 6"></path>
   </svg> Back to overview</a>
    <p class="date">{new Date(data.meta.date).toLocaleDateString('nl-nl', {day: '2-digit', month: 'long', year: 'numeric'})}</p>
    <h1>{data.meta.title}</h1>
    <ul>
      <li>Text by Futurama &amp; ChatGPT</li>
      <li>Photo by Pexels</li>
    </ul>
    <p class="lead">{data.meta.excerpt}</p>
  </div>
  <img src={data.meta.mainImage} alt="mainImage" />
</header>
<article class="prose">
  <svelte:component this={data.content} />
</article>

<style lang="scss">
  header {
    display: flex;
    width: 100vw;
    height: calc(100vh - 100px);
    margin-left: min(-10vw, calc(-50vw + 1536px / 2 ));
    margin-right: min(-10vw, calc(-50vw + 1536px / 2 ));
    padding: 0 20px 20px;
    position: relative;

    .intro {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-height: 100vh;
      font-size: 1.25rem;
      padding: 20px;
      position: relative;
      z-index: 2;

      a {
        display: flex;
        align-items: center;
        color: var(--text-muted);
        text-transform: uppercase;
        font-size: 0.85rem;
      }
      .date {
        color: var(--primary);
        margin-top: 3rem;
        margin-bottom: 1.5rem;
      }

      p, ul, a {
        max-width: calc(33.3% - 40px);
      }

      ul {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        margin-bottom: auto;
        li {
          text-transform: uppercase;
          font-size: 0.95rem;
          color: var(--primary);
        }

        li + li {
          &:before {
            content: "|";
            padding-right: 1rem;
          }
        }
      }

      h1 {
        font-size: 9rem;
        font-weight: 900;
        line-height: 1;
        text-wrap:balance;
        mix-blend-mode: difference;
        text-shadow: var(--dimmed) 0 0 90px;
      }

      .lead {
        font-size: 2rem;
      }
    }

    img {
      width: calc(66.6% - 20px);
      height: 100%;
      object-fit: cover;
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }

  article {
    margin-top: 1.5rem;
  }
</style>