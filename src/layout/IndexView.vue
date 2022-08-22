<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import { useAppStore } from '@/stores/app'

type MobileType = '' | 'mobile'
const mobile = ref<MobileType>('')
const appStore = useAppStore()

const resizeHandle = () => {
  if (document.body.scrollWidth < 768 || document.body.clientWidth < 768) {
    mobile.value = 'mobile'
    appStore.switchSidebar('hidden-sidebar')
  } else {
    mobile.value = ''
  }
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
