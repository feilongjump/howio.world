<script setup lang="ts">
const router = useRouter()

function go(routeName: any) {
  router.push({ name: routeName })
}
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center justify-center gap-y-4">
    <span>Hello World</span>
    <Hello />
    <div class="flex gap-x-4">
      <n-button @click="go('about')">
        About
      </n-button>
      <n-button type="primary" @click="go('backstage')">
        Backstage
      </n-button>
    </div>
  </div>
</template>

<route lang="json">
{
  "name": "index"
}
</route>
