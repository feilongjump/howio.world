<script>
  import '../app.css'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  onMount(() => {
    // 主题切换
    themeChange(false)
  })
</script>

<div id="app">
  <main>
    <slot />
  </main>
</div>
