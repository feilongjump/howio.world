<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

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

const posts = ref<Array<Post>>([])
const loadQuantity = ref(0)
const total = ref(0)
const params = reactive({
  page: 1,
  per_page: 10
})
const { refresh } = await useRequest.get('posts', params, {
  transform: (response) => {
    response.data.forEach((item: any) => {
      if (item.published_at.Valid) {
        item.published_at.Detail = dayjs(item.published_at.Time).format('YYYY-MM-DD HH:mm:ss')
        item.published_at.Time = dayjs(item.published_at.Time).fromNow()
      } else {
        item.published_at.Time = '还没发布呢'
      }
    });
    posts.value.push(...response.data)
    loadQuantity.value += response.data.length
    total.value = response.meta.total
  }
})

/**
 * 加载页面数据
 */
const loadPosts = () => {
  let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
  let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
  let scroll = document.documentElement.scrollTop || document.body.scrollTop
  let distanceBottom = scrollHeight - windowHeight - scroll

	if (distanceBottom < 350 && loadQuantity.value < total.value) {
		params.page++

    refresh()
	}
}

onMounted(() => {
  window.addEventListener('scroll', useThrottle(loadPosts, 1000, { 'leading': false }))
})
onUnmounted(() => {
  window.removeEventListener('scroll', useThrottle(loadPosts, 1000, { 'leading': false }))
})
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
            <span
              :title="post.published_at.Detail"
              class="text-gray-400 text-sm w-4 sm:w-20 text-center cursor-pointer"
            >{{ post.published_at.Time }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
