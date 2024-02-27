<script setup lang="ts">
// 以下三行有问题啊，注释只是为了不检查第 5 行代码，避免报错！
// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck
import { Editor as MarkdownEditor } from '@bytemd/vue-next'
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
  <MarkdownEditor
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
