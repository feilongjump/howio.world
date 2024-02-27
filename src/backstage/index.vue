<script setup lang="ts">
const router = useRouter()

function go() {
  router.push({ name: 'index' })
}
</script>

<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center gap-y-4">
    <span>Hello, This page is backstage</span>
    <n-button @click="go">
      home
    </n-button>
  </div>
</template>

<route lang="json">
{
  "name": "backstage",
  "meta": {
    "layout": "backstage",
    "requiresAuth": true
  }
}
</route>
