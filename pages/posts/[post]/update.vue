<script setup lang="ts">
import gfm from '@bytemd/plugin-gfm'
import breaks from '@bytemd/plugin-breaks'
import gemoji from '@bytemd/plugin-gemoji'
import mermaid from '@bytemd/plugin-mermaid'
import highlight from '@bytemd/plugin-highlight-ssr'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import frontmatter from '@bytemd/plugin-frontmatter'
import zhHans from 'bytemd/locales/zh_Hans.json'

const route = useRoute()
const router = useRouter()
const url = '/posts/' + route.params.post
const { data: post } = await useRequest.get(url)

const plugins = [
  breaks(),
  highlight(),
  frontmatter(),
  gfm(),
  mediumZoom(),
  gemoji(),
  mermaid()
]

const handleChange = (v: string) => {
  post.value.content.markdown = v
}

const submit = async () => {

  const { error } = await useRequest.put(url, post.value)
  if (error.value) {
    alert('更新失败！')
    return false
  }

  alert('更新成功！')
  router.push(url)
}
</script>

<template>
  <div class="form-container">
    <div class="form-header">
      <div class="left-box">
        <input type="text" placeholder="输入文章标题。。。" v-model="post.title" />
      </div>
      <div class="right-box">
        <button @click="submit">更新</button>
      </div>
    </div>
    <MarkdownEditor
      class="editor-container"
      :locale="zhHans"
      :plugins="plugins"
      :previewDebounce="100"
      :value="post.content.markdown"
      @change="handleChange"
    />
  </div>
</template>

<style scoped>
@import url('~/assets/css/post-form.css');
</style>

<style>
@import url('~/assets/css/markdown.css');
</style>
