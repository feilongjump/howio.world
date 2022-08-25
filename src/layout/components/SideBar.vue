<script setup lang="ts">
import Logo from '@/assets/logo.png'
import { useAppStore } from '@/stores/app'
import SideBarItem from './SideBarItem.vue'
import SideBarShade from './SideBarShade.vue'
import { switchSidebar } from '@/utils/sidebar'
import type { CollapseClassType } from '@/types/SideBar'
import backstageRoute from '@/router/backstage'

const basePath = '/backstage'
const appStore = useAppStore()
const route = useRoute()
const appName = import.meta.env.VITE_APP_NAME

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
      <el-menu class="el-menu-vertical" router :collapse="isCollapse" :default-active="route.path">
        <SideBarItem
          v-for="route in backstageRoute"
          :key="route.path"
          :item="route"
          :basePath="basePath"
        />
      </el-menu>
    </el-scrollbar>
  </el-aside>
  <SideBarShade />
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/sidebar.scss';
</style>
