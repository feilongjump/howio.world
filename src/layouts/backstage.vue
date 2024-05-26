<script setup lang="ts">
</script>

<template>
  <div class="w-dvw min-h-dvh flex gap-x-6">
    <div class="w-80 h-dvh">
      <Sidebar />
    </div>
    <main class="flex-1 bg-pink-300">
      <RouterView />
    </main>
  </div>
</template>
