<script setup lang="ts">
const props = defineProps({
  keywords: {
    type: String,
    required: true
  }
})

const keywords = ref<string>(props.keywords)
</script>

<template>
  <el-input v-model="keywords" class="circular-bead-input" placeholder="Pick a date">
    <template #prefix>
      <i-ep-search />
    </template>
  </el-input>
</template>
