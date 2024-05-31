<script setup lang="ts">
import * as heroIconsOutline from '@heroicons/vue/24/outline'

const router = useRouter()
const routes = router.getRoutes().filter((route) => {
  // 过滤后台路由
  if (route.meta.layout === 'backstage')
    return route

  return false
}).sort((a, b) => {
  // 后台路由进行排序
  return (a.meta.order as number) - (b.meta.order as number)
})

/**
 * 动态获取 Icon
 *
 * @param name icon 名称
 */
function renderIcon(name: string) {
  return heroIconsOutline[`${name}Icon`]
}
</script>

<template>
  <div class="w-full h-dvh flex flex-col">
    <div class="w-full h-28 flex items-center justify-center">
      <RouterLink
        class="text-2xl font-bold italic relative after:w-full after:absolute after:bottom-0 after:-left-2 after:border-b after:border-gray-400"
        :to="{ name: 'backstage.index' }"
      >
        How IO
      </RouterLink>
    </div>
    <div class="flex-1 w-full flex flex-col items-center gap-y-8 pt-6">
      <div
        v-for="route in routes" :key="route.path"
        class="w-full pl-20"
      >
        <RouterLink
          :to="{ name: route.name }"
          class="text-xl flex gap-x-4 items-center"
          :class="[$route.name === route.name ? 'font-bold text-white' : 'text-color-gray']"
        >
          <component :is="renderIcon(route.meta.icon as string)" class="w-6 h-6" />
          {{ route.meta.title }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
