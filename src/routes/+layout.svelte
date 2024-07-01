<script>
  import '../app.css'
  import Header from './Header.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  onMount(() => {
    // 主题切换
    themeChange(false)
  })
</script>

<div id="app">
  <Header />

  <main>
    <slot />
  </main>
</div>

<style>
  main {
    margin-top: var(--header-h);
    min-height: calc(100dvh - var(--header-h));
    background-color: var(--main-bg-color);
    @apply rounded-t-xl md:rounded-t-3xl;
  }
</style>
