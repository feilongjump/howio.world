<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

const route = useRoute()
const { data: post } = await useRequest.get(route.path, {}, {
  transform: (post) => {
    if (post.published_at.Valid) {
      post.published_at.Detail = dayjs(post.published_at.Time).format('YYYY-MM-DD HH:mm:ss')
      post.published_at.Time = dayjs(post.published_at.Time).fromNow()
    } else {
      post.published_at.Time = '还没发布呢'
    }

    return post
  }
})

</script>

<template>
  <div class="w-full h-full min-h-screen p-6 flex justify-center">
    <div class="w-full max-w-2xl h-full flex justify-start flex-col">
      <!-- avatar -->
      <div class="py-16">
        <img class="w-20 h-20 rounded-full" src="~/assets/img/avatar.jpg" />
      </div>
      <!-- title published_at tags -->
      <div class="mb-12">
        <h1 class="text-2xl text-gray-900 mb-4">{{ post.title }}</h1>
        <div class="flex gap-x-4 text-sm text-gray-400">
          <span
              :title="post.published_at.Detail"
              class="text-gray-400 text-sm w-full cursor-pointer"
            >{{ post.published_at.Time }}</span>
          <!-- <span v-for="tag in post.tags">{{ tag }}</span> -->
        </div>
      </div>
      <!-- body -->
      <div class="prose" v-html="post.content.body"></div>
      <div
        class="mt-12 mb-16 cursor-pointer text-gray-600
          hover:text-black hover:underline underline-offset-2"
        @click="$router.back()"
      >
        <span>&lt;- Go to prev</span>
      </div>
    </div>
  </div>
</template>

<style>

</style>

