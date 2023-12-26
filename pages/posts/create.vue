<script setup lang="ts">
import gfm from '@bytemd/plugin-gfm'
import breaks from '@bytemd/plugin-breaks'
import gemoji from '@bytemd/plugin-gemoji'
import mermaid from '@bytemd/plugin-mermaid'
import highlight from '@bytemd/plugin-highlight-ssr'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import frontmatter from '@bytemd/plugin-frontmatter'
import zhHans from 'bytemd/locales/zh_Hans.json'

const plugins = [
  breaks(),
  highlight(),
  frontmatter(),
  gfm(),
  mediumZoom(),
  gemoji(),
  mermaid()
]

const router = useRouter()
const params = reactive({
  title: '',
  content: {
    markdown: ''
  }
})
const handleChange = (v: string) => {
  params.content.markdown = v
}

const submit = async () => {

  const { data: post, error } = await useRequest.post('/posts', params)
  if (error.value) {
    alert('发布失败！')
    return false
  }

  alert('发布成功！')
  router.push('/posts/' + post.value.data.id)
}
</script>

<template>
  <div class="form-container">
    <div class="form-header">
      <div class="left-box">
        <input type="text" placeholder="输入文章标题。。。" v-model="params.title" />
      </div>
      <div class="right-box">
        <button>草稿箱</button>
        <button @click="submit">发布</button>
      </div>
    </div>
    <MarkdownEditor
      class="editor-container"
      :locale="zhHans"
      :plugins="plugins"
      :previewDebounce="100"
      :value="params.content.markdown"
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
