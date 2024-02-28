<script setup lang="ts">
import useMyFetch from '~utils/fetch'
import avatarImg from '~assets/avatar.jpg'

interface NullTime {
  Time: string
  Valid: boolean
  Detail?: string
}

interface Post {
  id: number
  title: string
  published_at: NullTime
}

const postsTotal = ref(-1)
const posts = ref<Array<Post>>([])

async function getPosts() {
  const { data } = await useMyFetch('posts').get().json()
  posts.value.push(...data.value.data)
  postsTotal.value = data.value.meta.total || 0
}

useInfiniteScroll(
  document,
  async () => {
    await getPosts()
  },
  {
    distance: 10,
    canLoadMore: () => {
      if (postsTotal.value > -1 && posts.value.length >= postsTotal.value)
        return false

      return true
    },
  },
)
</script>

<template>
  <div min-h-screen w-full flex items-center justify-center>
    <div my-16 max-w-2xl w-full flex flex-col justify-start>
      <div w-32>
        <img h-32 w-32 rounded-full :src="avatarImg">
      </div>
      <div my-12>
        <RouterLink text-4xl font-bold :to="{ name: 'index' }">
          Hello World!
        </RouterLink>
      </div>
      <div
        w-full flex flex-col gap-y-6
      >
        <template v-for="post in posts" :key="post.id">
          <div
            w-full flex items-center justify-between
          >
            <RouterLink
              flex justify-between text-gray-900 decoration-0 underline-offset-4
              class="hover:underline"
              :to="{ name: 'posts-details', params: { post: post.id } }"
            >
              {{ post.title }}
            </RouterLink>
            <span
              :title="post.published_at.Detail"
              inline-block cursor-pointer text-center text-sm text-gray-400
            >{{ post.published_at.Time }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<route lang="json">
{
  "name": "posts"
}
</route>
