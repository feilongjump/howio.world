<script setup lang="ts">
import Logo from '@/assets/logo.png'
import { useAppStore } from '@/stores/app'
import SideBarItem from './SideBarItem.vue'
import SideBarShade from './SideBarShade.vue'
import { switchSidebar } from '@/utils/sidebar'
import type { CollapseClassType } from '@/types/SideBar'

const appStore = useAppStore()
const appName = import.meta.env.VITE_APP_NAME

const menus = [
  {
    path: '/backstage/dashboard',
    title: 'Dashboard'
  },
  {
    path: '/backstage/users',
    title: 'User'
  }
]

const collapseClass = ref<CollapseClassType>('open-sidebar')
const isCollapse = computed(() => {
  const sidebarState = appStore.sidebar
  collapseClass.value = sidebarState

  return ['open-sidebar', 'hidden-sidebar'].includes(sidebarState) ? false : true
})
</script>

<template>
  <el-aside class="sidebar-container" :class="collapseClass">
    <!-- header -->
    <div class="aside-logo" @click="switchSidebar">
      <img :src="Logo" />
      <span>{{ appName }}</span>
    </div>

    <!-- menu -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu class="el-menu-vertical" router :collapse="isCollapse">
        <SideBarItem v-for="menu in menus" :key="menu.path" :item="menu" :basePath="menu.path" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
  <SideBarShade />
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/sidebar.scss';
</style>
