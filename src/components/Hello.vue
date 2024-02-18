<script setup lang="ts">
import VueSVG from '~assets/vue.svg'
import UnocssSVG from '~assets/unocss.svg'
</script>

<template>
  <div class="flex flex-col items-center gap-y-4">
    <div class="flex justify-center gap-x-5">
      <img src="/vite.svg" class="h-12 w-12" alt="Vite logo">
      <img :src="VueSVG" class="h-12 w-12" alt="Vue logo">
      <img :src="UnocssSVG" class="h-12 w-12" alt="Vue logo">
    </div>
    <span>This is component!</span>
  </div>
</template>
