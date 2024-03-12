<script setup lang="ts">
const route = useRoute()

const isShow = ref(true)

watch(() => route.meta, (newVal) => {
  if (newVal.layout && newVal.layout === 'backstage')
    isShow.value = false
  else isShow.value = true
})
</script>

<template>
  <div
    v-if="isShow"
    absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center gap-x-2
    bg-white
    text="sm gray-400"
  >
    <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2024196417号</a>
    <span>|</span>
    <a href="https://howio.world" target="_blank">FeilongJUMP</a>
  </div>
</template>
