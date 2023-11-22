<script setup lang="ts">
const posts = [
  {
    id: 5,
    title: '这是一个标题',
    published_at: '刚刚'
  },
  {
    id: 4,
    title: 'It\'s a headline',
    published_at: '昨天'
  },
  {
    id: 3,
    title: '先写个简单的标题',
    published_at: '上个月'
  },
  {
    id: 2,
    title: 'Let\'s start with a simple headline',
    published_at: '去年'
  },
  {
    id: 1,
    title: 'First posts',
    published_at: '前年'
  }
]
</script>

<template>
  <div class="w-full h-full min-h-screen p-6 flex justify-center items-center">
    <div class="w-full max-w-2xl h-full flex justify-start flex-col my-16">
      <img class="w-32 h-32 rounded-full" src="~/assets/img/avatar.jpg" />
      <div class="my-12">
        <NuxtLink class="text-4xl font-bold" to="/">Hello World!</NuxtLink>
      </div>
      <div class="w-full flex flex-col gap-y-6">
        <template v-for="post in posts">
          <div class="w-full flex justify-between">
            <NuxtLink
              class="flex justify-between text-gray-900 hover:underline decoration-0 underline-offset-4"
              :to="`/posts/${post.id}`"
            >
              {{ post.title }}
            </NuxtLink>
            <span class="text-gray-400 text-sm w-4 sm:w-20 text-center">{{ post.published_at }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
