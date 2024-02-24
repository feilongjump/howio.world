<script setup lang="ts">
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
