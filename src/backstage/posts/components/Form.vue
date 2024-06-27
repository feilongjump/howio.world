<script setup lang="ts">

const post = ref({
  title: '',
  content: {
    html: '',
    markdown: '',
  },
})

function receive(content: string) {
  post.value.content.markdown = content
}

function submit() {
  console.log(post.value)
}
</script>

<template>
  <!-- title -->
  <div class="relative">
    <input
      v-model="post.title"
      class="h-12 w-full border-none pl-4 text-xl outline-none"
      type="text"
      placeholder="请输入标题。"
    >
    <button
      class="absolute right-4 card px-4 py-2 cursor-pointer"
      @click="submit"
    >
      发布
    </button>
  </div>
  <!-- content -->
  <div class="border-t">
    <MarkdownEditor
      v-model:value="post.content.markdown"
      placeholder="几乎所有好的写作都是从糟糕的第一次努力开始的。"
      class="md-container"
      @update:value="receive"
    />
  </div>
</template>

<style>
.md-container {
  height: calc(100dvh - var(--backstage-header-h) - var(--spacing-12));
}
</style>
