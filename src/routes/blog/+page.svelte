<script lang="ts">
  export let data;
</script>

<section>
  <div class="filter-section">
    <h4>All blog posts</h4>
    <div>
      <button>All</button>
      <button>Javascript</button>
      <button>CSS</button>
      <button>Frameworks</button>
      <button>UI/UX</button>
    </div>
  </div>
  <div class="grid">
    {#each data.posts as {slug, title, thumbnail, date}}
      <a href="/blog/{slug}" class="card">
        <img src={thumbnail} alt="{title} image" />
        <span>{new Date(date).toLocaleDateString('nl-nl', {day: '2-digit', month: 'long', year: 'numeric'})}</span>
        <h3>{title}</h3>
      </a>
    {/each}
  </div>
</section>

<style lang="scss">
  .filter-section {
    margin: 4rem 0;
    h4 {
      font-size: 1.65rem;
      font-weight: bold;
    }

    div {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
      button {
        cursor: pointer;
        border: 1px solid var(--muted2);
        border-radius: 4px;
        padding: 4px 8px;
        font-size: 0.85rem;
        text-transform: uppercase;
        color: var(--text-muted);

        &:hover {
          color: var(--primary);
          background: var(--muted1);
        }
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;

    a.card {
      text-wrap: balance;
      border: 1px solid var(--muted2);
      padding: 8px;
      border-radius: 16px;
      overflow: hidden;

      &:hover {
        background: var(--muted1);
      }

      img {
        aspect-ratio: 16/6;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
      }

      span {
        display: block;;
        font-size: 0.75rem;
        color: var(--accent);
        margin-top: 0.75rem;
        padding-bottom: 0.5rem;
      }
      h3 {
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

    }
  }
</style>