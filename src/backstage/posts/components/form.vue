<script setup lang="ts">
import useMyFetch from '~utils/fetch'

interface Content {
  id: number
  markdown: string
  body: string
}
interface Post {
  id: number
  title: string
  published_at: string
  content: Content
}

const props = defineProps<{
  id: string
}>()
const emit = defineEmits<{
  reload: [boolean]
}>()

const post = ref<Post>({
  id: 0,
  title: '',
  published_at: '',
  content: {
    id: 0,
    body: '',
    markdown: '',
  },
})
const _post = toRaw(post.value)

watch(() => props.id, (newPostId: string) => {
  if (newPostId !== '')
    getPost(newPostId)
  else
    post.value = _post
})

async function getPost(id: string) {
  const { data } = await useMyFetch(`posts/${id}`).get().json()
  // todo: delete
  data.value.published_at = ''
  post.value = data.value
}

/**
 * 接收 markdown 内容
 *
 * @param content string
 */
function receive(content: string) {
  post.value.content.markdown = content
}

async function submit() {
  if (props.id !== '') {
    const { error } = await useMyFetch(`posts/${props.id}`).put(post).json()
    if (error.value !== null)
      return false
    else
      window.$message.success('更新成功！')
  }
  else {
    const { error } = await useMyFetch('posts').post(post).json()
    if (error.value !== null)
      return false
    else
      window.$message.success('发布成功！')
  }

  emit('reload', true)
}
</script>

<template>
  <div flex-1>
    <div relative>
      <input
        v-model="post.title"
        h-12 w-full border-none pl-8 text-xl outline-none
        type="text"
        placeholder="请输入标题。"
      >
      <n-button
        absolute inset-y-2 right-8
        type="info"
        @click="submit"
      >
        发布
      </n-button>
    </div>
    <div
      b-t="1 solid gray-300"
    >
      <Editor
        v-model:value="post.content.markdown"
        placeholder="几乎所有好的写作都是从糟糕的第一次努力开始的。"
        class="h-[calc(100vh-8rem-4px)]"
        @update:value="receive"
      />
    </div>
  </div>
</template>
