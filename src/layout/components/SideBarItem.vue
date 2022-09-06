<script setup lang="ts">
import { startsWith } from 'lodash'
import type { RouteRecordRaw } from 'vue-router'

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

const onlyOneChild = ref(props.item)

const resolvePath = (routePath: string) => {
  // eg: /parent
  if (routePath === '') return props.basePath
  // eg: /xxx
  if (startsWith(routePath, '/')) return routePath
  // eg: /parent/xxx
  return `${props.basePath}/${routePath}`
}
const hasOneShowingChild = (parent: RouteRecordRaw, children: RouteRecordRaw[] = []) => {
  const showingChildren = children.filter((child) => {
    if (child.meta?.hidden) {
      return false
    } else {
      onlyOneChild.value = child
      return true
    }
  })

  if (showingChildren.length === 1) {
    onlyOneChild.value.path = onlyOneChild.value.path === '' ? parent.path : onlyOneChild.value.path
    return true
  }

  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent }
    return true
  }

  return false
}
</script>

<template>
  <el-menu-item
    v-if="hasOneShowingChild(props.item, props.item.children)"
    :index="resolvePath(onlyOneChild.path)"
  >
    <template v-if="onlyOneChild.meta.icon">
      <el-icon>
        <component :is="onlyOneChild.meta.icon"></component>
      </el-icon>
    </template>
    <template #title>
      {{ onlyOneChild.meta.title }}
    </template>
  </el-menu-item>

  <el-sub-menu v-else :index="resolvePath(props.item.path)">
    <template #title>
      <template v-if="props.item.meta.icon">
        <el-icon>
          <component :is="props.item.meta.icon"></component>
        </el-icon>
      </template>
      <span>{{ props.item.meta.title }}</span>
    </template>

    <SideBarItem
      v-for="child in props.item.children"
      :key="child.path"
      :item="child"
      :basePath="resolvePath(props.item.path)"
    />
  </el-sub-menu>
</template>
