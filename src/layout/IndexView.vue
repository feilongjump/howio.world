<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'

type MobileType = '' | 'mobile'
const mobile = ref<MobileType>('')

const resizeHandle = () => {
  mobile.value = document.body.scrollWidth < 768 ? 'mobile' : ''
}

onBeforeMount(() => {
  window.onresize = () => {
    resizeHandle()
  }
})

onMounted(() => {
  resizeHandle()
})
</script>

<template>
  <div class="main-container" :class="mobile">
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
