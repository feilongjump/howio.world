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
