<template>
  <div class="w-screen h-screen flex justify-center items-center flex-col gap-y-4">
    <NuxtLink to="/posts">Posts 页面</NuxtLink>
    <button
      class="border border-sky-500 bg-sky-500 text-white px-6 py-2 rounded-xl shadow-xl"
      @click="num++"
    >
      点击：{{ num }}
    </button>
  </div>
</template>

<script setup lang="ts">
const num = ref(0)
</script>
