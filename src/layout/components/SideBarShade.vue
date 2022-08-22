<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import type { CollapseClassType } from '@/types/SideBar'

const appStore = useAppStore()
const sidebarShade = ref<CollapseClassType>(appStore.sidebar)

const hiddenShade = () => {
  appStore.switchSidebar('hidden-sidebar')
}

watch(
  () => appStore.sidebar,
  (newVal) => {
    sidebarShade.value = newVal
  }
)
</script>

<template>
  <div class="sidebar-shade" :class="sidebarShade" @click="hiddenShade"></div>
</template>
