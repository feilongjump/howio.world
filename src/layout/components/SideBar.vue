<script setup lang="ts">
import Logo from '@/assets/logo.png'
import { useAppStore } from '@/stores/app'
import SideBarItem from './SideBarItem.vue'
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
  const sidebarState = appStore.sidebarState
  collapseClass.value = sidebarState

  return sidebarState === 'draw-back-sidebar' ? true : false
})
</script>

<template>
  <el-aside class="sidebar-container" :class="collapseClass">
    <!-- header -->
    <div class="aside-logo">
      <img :src="Logo" alt="" />
      <span>{{ appName }}</span>
    </div>

    <!-- menu -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu class="el-menu-vertical" router :collapse="isCollapse">
        <SideBarItem v-for="menu in menus" :key="menu.path" :item="menu" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/sidebar.scss';
</style>
