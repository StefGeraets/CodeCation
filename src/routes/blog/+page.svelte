<script lang="ts">
  import {Categories} from "$lib/constants";
	import type { Categories as CategoryType } from "$lib/types.js";

  export let data;

  let selectedCategory: string = 'all';

  const filterPosts = (category: string) => {
    selectedCategory = category;
  };

  $: filteredPosts = selectedCategory === 'all' 
    ? data.posts 
    : data.posts.filter((post) => post.categories.includes(selectedCategory as CategoryType))
</script>

<section>
  <div class="filter-section">
    <h4>All blog posts</h4>
    <div>
      <button 
        on:click={() => filterPosts('all')} 
        class:active={selectedCategory === 'all'}>
        All
      </button>
      {#each Categories as category }
        <button 
          on:click={() => filterPosts(category)} 
          class:active={selectedCategory === category}>
            {category}
        </button>
      {/each}
    </div>
  </div>

  <div class="grid">
    {#each filteredPosts as {slug, title, thumbnail, date}}
      <a href="/blog/{slug}" class="card post-{slug}">
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

        &:hover,
        &.active:hover {
          color: var(--primary);
          background: var(--muted1);
        }

        &.active {
          color: var(--accent);
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
        aspect-ratio: 16/8;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
      }

      span {
        display: block;;
        font-size: 1rem;
        color: var(--accent);
        margin-top: 0.75rem;
        padding-bottom: 0.5rem;
      }
      h3 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

    }
  }
</style>