<script setup lang="ts">
</script>

<template>
  <div class="w-dvw min-h-dvh flex">
    <div class="w-80 hidden sm:block h-dvh">
      <BackstageSidebar />
    </div>
    <main class="flex-1 px-2 sm:px-6">
      <BackstageHeader />
      <RouterView />
    </main>
  </div>
</template>
