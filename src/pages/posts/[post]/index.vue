<script setup lang="ts">
import useMyFetch from '~utils/fetch'
import avatarImg from '~assets/avatar.jpg'

const route = useRoute()

interface NullTime {
  Time: string
  Valid: boolean
  Detail?: string
}
interface Content {
  body: string
  markdown: string
}

interface Post {
  id: number
  title: string
  published_at: NullTime
  content: Content
}
const post = ref<Post>({
  id: 0,
  title: '',
  published_at: {
    Time: '',
    Valid: false,
    Detail: '',
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
            :title="post.published_at.Detail"
            inline-block cursor-pointer text-sm text-gray-400
          >{{ post.published_at.Time }}</span>
          <!-- <span v-for="tag in post.tags">{{ tag }}</span> -->
        </div>
      </div>
      <!-- body -->
      <div v-html="post.content.body" />
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
