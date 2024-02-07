<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const menus = [
  {
    name: 'Dashboard',
    routeName: 'backstage',
  },
  {
    name: 'Posts',
    routeName: 'backstage-posts',
  },
]

function go(routeName: any) {
  router.push({ name: routeName })
}
</script>

<template>
  <n-layout-sider
    :native-scrollbar="false"
    collapse-mode="transform"
    :collapsed-width="0"
    :width="240"
    show-trigger="bar"
    class="bg-gray-100/30"
  >
    <div h-24 w-full flex items-center justify-center>
      <Logo />
    </div>
    <div pl-8>
      <div
        v-for="menu in menus" :key="menu.name"
        class="hover:bg-blue-500/70 hover:text-white"
        my-4 cursor-pointer rounded-l-xl py-3 pl-8
        :class="route.name === menu.routeName ? 'bg-blue-500/70 text-white font-bold' : ''"
        @click="go(menu.routeName)"
      >
        {{ menu.name }}
      </div>
    </div>
  </n-layout-sider>
</template>
