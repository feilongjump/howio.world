<script>
  import '../app.css'
  import Header from './Header.svelte'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  // Scrollbars
  import 'simplebar'
  import 'simplebar/dist/simplebar.css'
  // You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
  import ResizeObserver from 'resize-observer-polyfill'

  onMount(() => {
    // 主题切换
    themeChange(false)

    window.ResizeObserver = ResizeObserver
  })
</script>

<div id="app">
  <Header />

  <main>
    <div class="h-full" data-simplebar data-simplebar-auto-hide="true">
      <slot />
    </div>
  </main>
</div>

<style>
  main {
    margin-top: var(--header-h);
    max-height: calc(100dvh - var(--header-h));
    background-color: var(--main-bg-color);
    @apply h-dvh overflow-hidden;
  }
</style>
