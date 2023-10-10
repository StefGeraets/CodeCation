<script lang="ts">
  import { page } from "$app/stores";
  let path: string;

  $: path = $page.url.pathname;
</script>

<header>
  <a href="/" class="logo">CodeCation</a>
  <nav>
    <a href="/" class:active={path === "/"}>Home</a>
    <a href="/blog" class:active={path.startsWith("/blog")}>Blog</a>
    <a href="/about" class:active={path === "/about"}>About</a>
  </nav>
</header>

<style lang="scss">
  header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2.4rem;
    width: 100vw;
    height: 100px;
    border-bottom: 1px solid var(--background);
    background: rgb(17,15,21);
    z-index: 9;
  }
  
  .logo {
    text-transform: uppercase;
    letter-spacing: .1pt;
    font-weight: 900;
    font-size: 2rem;
    color: var(--accent);
    background: linear-gradient(120deg,var(--primary),var(--accent));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  nav {
    display: flex;
    font-size: 1.2rem;
    gap: 3rem;

    a {
      color: var(--text);

      &:hover {
        opacity: 0.8;
      }

      &.active {
        color: var(--accent);
      }
    }
  }
</style>