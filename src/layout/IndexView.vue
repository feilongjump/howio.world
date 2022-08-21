<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="main-container">
    <el-container>
      <SideBar />
      <el-container direction="vertical">
        <NavBar />
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/backstage.scss';
</style>
