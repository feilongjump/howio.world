<script setup lang="ts">
</script>

<template>
  <div id="layout-container">
    <Sidebar />
    <main>
      <slot name="header"></slot>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="postcss">
#layout-container {
  @apply min-h-screen p-8;

  background-image: linear-gradient(
    to right top,
    #fdaeae, #f7b3cb, #e8bce2,
    #d3c7f1, #c1d1f5, #bed4f8,
    #bbd6fa, #b8d9fc, #c1d6ff,
    #d2d1ff, #e8caff, #ffc2ff
  );

  main {
    margin-left: calc(theme('width.24') + theme('padding.8'));
  }
}
</style>
