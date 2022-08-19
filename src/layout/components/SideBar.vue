<script setup lang="ts">
import Logo from '@/assets/logo.png'
import SideBarItem from './SideBarItem.vue'

const appName = import.meta.env.VITE_APP_NAME

const menus = [
  {
    path: '/auth/login?a',
    title: '登录'
  },
  {
    path: '/auth/login?b',
    title: '登录1'
  },
  {
    path: '/auth/login?c',
    title: '登录2',
    children: [
      {
        path: '/auth/login?c-c',
        title: '登录 2 - 2'
      }
    ]
  }
]
</script>

<template>
  <el-aside class="sidebar-container">
    <!-- header -->
    <div class="aside-logo">
      <img :src="Logo" alt="" />
      <span>{{ appName }}</span>
    </div>

    <!-- menu -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu router>
        <SideBarItem v-for="menu in menus" :key="menu.path" :item="menu" :basePath="menu.path" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
