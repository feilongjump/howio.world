<script setup lang="ts">
const router = useRouter()
const routes = router.getRoutes().filter((route) => {
  // 过滤后台路由
  if (route.meta.layout === 'backstage')
    return route

  return false
}).sort((a, b) => {
  // 后台路由进行排序
  return a.meta.order - b.meta.order
})
</script>

<template>
  <div class="w-full h-dvh flex flex-col">
    <div class="w-full h-28 flex items-center justify-center">
      <router-link
        class="text-xl font-bold italic relative after:w-full after:absolute after:bottom-0 after:-left-2 after:border-b after:border-gray-400"
        to="#"
      >
        How IO
      </router-link>
    </div>
    <div class="flex-1 w-full flex flex-col items-center">
      <div v-for="route in routes" :key="route.path">
        <RouterLink class="w-full h-full flex justify-start items-center gap-x-2" :to="{ name: route.name }">
          {{ route.meta.title }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
