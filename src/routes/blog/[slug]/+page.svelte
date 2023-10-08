<script lang="ts">
	export let data;
</script>

<article>
  <h1>{data.meta.title}</h1>
  <img src={data.meta.mainImage} alt="mainImage" />

  <svelte:component this={data.content} />
  
</article>

<style lang="scss">
</style>