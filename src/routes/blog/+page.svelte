<script lang="ts">
  export let data;
</script>

<section>
  <h1>All blog posts</h1>
  <div class="grid">
    {#each data.postList as {slug, title, thumbnail}}
      <a href="/blog/{slug}" class="card">
        <img src={thumbnail} alt="{title} image" />
        <h3>{title}</h3>
      </a>
    {/each}
  </div>
</section>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;

    a.card {
      text-wrap: balance;

      h3 {
        font-size: 1.6rem;
        font-weight: bold;
      }

      img {
        aspect-ratio: 16/6;
        object-fit: cover;
      }
    }
  }
</style>