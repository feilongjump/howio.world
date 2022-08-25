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
    <template v-if="item.meta.icon">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
    </template>
    <template #title>
      {{ item.meta.title }}
    </template>
  </el-menu-item>

  <el-sub-menu v-else :index="resolvePath(item.path)">
    <template #title>{{ item.meta.title }}</template>

    <SideBarItem
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :basePath="resolvePath(child.path)"
    />
  </el-sub-menu>
</template>
