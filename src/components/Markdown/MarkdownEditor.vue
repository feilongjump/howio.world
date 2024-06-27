<script setup lang="ts">
// 不懂就问，为啥会报错，直接枪毙你！
// @ts-nocheck
import { Editor } from '@bytemd/vue-next'
import zhHans from 'bytemd/locales/zh_Hans.json'
import plugins from './plugins'

const props = defineProps({
  value: String,
  placeholder: String,
})
const emit = defineEmits(['update:value'])
function handleChange(value: string) {
  emit('update:value', value)
}
</script>

<template>
  <Editor
    :value="props.value"
    :plugins="plugins"
    :locale="zhHans"
    :placeholder="props.placeholder"
    :preview-debounce="100"
    @change="handleChange"
  />
</template>

<style>
@import './index.css';
</style>
