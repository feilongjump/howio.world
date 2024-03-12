<script setup lang="ts">
import Prism from 'prismjs'
import useMyFetch from '~utils/fetch'
import avatarImg from '~assets/avatar.jpg'
import type { Post } from '~/types/post'

const route = useRoute()

const post = ref<Post>({
  id: 0,
  title: '',
  published_at: {
    humans: '',
    datetime: '',
  },
  content: {
    body: '',
    markdown: '',
  },
})

onMounted(async () => {
  const { data } = await useMyFetch(route.path).get().json()
  post.value = data.value
})
onUpdated(() => {
  Prism.highlightAll() // 修改内容后重新渲染
})
</script>

<template>
  <div flex justify-center p-6>
    <div max-w-2xl w-full flex flex-col justify-start>
      <!-- avatar -->
      <div py-16>
        <img h-20 w-20 rounded-full :src="avatarImg">
      </div>
      <!-- title published_at tags -->
      <div mb-12>
        <h1 mb-4 text-2xl text-gray-900>
          {{ post.title }}
        </h1>
        <div flex items-center gap-x-4 text-sm text-gray-400>
          <span
            :title="post.published_at.datetime"
            inline-block cursor-pointer text-sm text-gray-400
          >{{ post.published_at.humans ?? "暂未发布" }}</span>
          <!-- <span v-for="tag in post.tags">{{ tag }}</span> -->
        </div>
      </div>
      <!-- body -->
      <div markdown-body v-html="post.content.body" />
      <div
        mb-16 mt-12 cursor-pointer text-gray-600 underline-offset-2 class="hover:text-black hover:underline"
        @click="$router.push('/posts')"
      >
        <span>&lt;- Go to prev</span>
      </div>
    </div>
  </div>
</template>

<route lang="json">
{
  "name": "posts-details"
}
</route>
