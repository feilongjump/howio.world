<script setup lang="ts">
const router = useRouter()

function go() {
  router.push({ name: 'index' })
}
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center justify-center gap-y-4">
    <span>This page is about.</span>
    <n-button @click="go">
      Go home
    </n-button>
  </div>
</template>

<route lang="json">
{
  "name": "about"
}
</route>
