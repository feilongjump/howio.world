<script setup lang="ts">
import Simplebar from 'simplebar-vue'
import Space from './components/Space.vue'
</script>

<template>
  <div class="h-screen w-screen">
    <Simplebar class="h-full">
      <div class="h-screen w-screen flex flex-col relative overflow-hidden">
        <header class="h-16 w-full py-4">
          <div class="max-w-7xl flex justify-between items-center mx-auto px-2 sm:px-10">
            <RouterLink :to="{ name: 'index' }">
              <img class="w-8 h-8" src="@/assets/logo.svg" alt="">
            </RouterLink>
            <div class="text-color-gray text-sm">
              <span>已经有账号了？</span>
              <RouterLink class="text-white text-base font-semibold" to="#">
                Sign in →
              </RouterLink>
            </div>
          </div>
        </header>
        <main class="flex-auto min-h-96 w-screen pt-20 px-2 sm:px-10 flex justify-center">
          <div class="w-[36rem] h-20 p-4 card">
            <span class="text-color-gray">
              Welcome to HowIO!
              <br>
              Let’s begin the adventure!
            </span>
          </div>
        </main>
        <footer
          class="h-24 w-full pb-10 px-2 sm:px-10 text-color-gray
          flex justify-center items-center gap-2 sm:gap-6 flex-col sm:flex-row"
        >
          <a href="https://beian.miit.gov.cn" target="_blank" class="text-xs link">粤ICP备2024196417号</a>
          <a href="https://howio.world" target="_blank" class="text-sm link">Site by: FeiLoong</a>
        </footer>
        <!-- space -->
        <div class="h-full w-full absolute top-0 left-0 -z-10">
          <Space />
        </div>
      </div>
    </Simplebar>
  </div>
</template>

<route lang="json">
{
  "name": "sign-up"
}
</route>
