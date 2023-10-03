<script lang="ts">
	export let data;
</script>

<article>
  <h1>{data.post.title}</h1>
  <div>{@html data.post.content}</div>
</article>

<style lang="scss">
</style>