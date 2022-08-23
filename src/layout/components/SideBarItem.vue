<script setup lang="ts">
import { startsWith } from 'lodash'
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
  // eg: /parent
  if (routePath === '') return props.basePath
  // eg: /xxx
  if (startsWith(routePath, '/')) return routePath
  // eg: /parent/xxx
  return `${props.basePath}/${routePath}`
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

    <SideBarItem
      v-for="children in item.children"
      :key="children.path"
      :item="children"
      :basePath="resolvePath(children.path)"
    />
  </el-sub-menu>
</template>
