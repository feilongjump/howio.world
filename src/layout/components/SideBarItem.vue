<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    default: ''
  }
})

const resolvePath = (routePath: string) => {
  // todo: 这里会有问题，当子路由需要直接跳转到 /xxx 时，会拼接上 /parent/xxx
  return props.basePath + routePath
}
</script>

<template>
  <el-menu-item v-if="!item.children" :index="resolvePath(item.path)">
    <el-icon>
      <i-ep-pie-chart />
    </el-icon>
    <template #title>
      {{ item.title }}
    </template>
  </el-menu-item>

  <el-sub-menu v-else :index="resolvePath(item.path)">
    <template #title>{{ item.title }}</template>

    <SideBarItem v-for="children in item.children" :key="children.path" :item="children" />
  </el-sub-menu>
</template>
