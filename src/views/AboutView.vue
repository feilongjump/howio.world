<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="inc">count: {{ num }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const num = ref(0)

const inc = () => {
  num.value++
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
