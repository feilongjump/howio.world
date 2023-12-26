<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { user } = useAuthStore()

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

const destroy = async () => {

  const { error } = await useRequest.delete(route.path)
  if (error.value) {
    alert('删除失败！')
    return false
  }

  alert("删除成功！")
  router.push('/posts')
}
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
        <div class="flex items-center gap-x-4 text-sm text-gray-400">
          <span
              :title="post.published_at.Detail"
              class="text-gray-400 text-sm inline-block cursor-pointer"
            >{{ post.published_at.Time }}</span>
          <!-- <span v-for="tag in post.tags">{{ tag }}</span> -->
          <div class="flex gap-x-2" v-if="! isEmpty(user)">
            <NuxtLink
              class="flex items-center gap-x-1 hover:text-blue-400"
              :to="{ name: 'posts-post-update', params: { post: post.id } }"
            >
              <PencilSquareIconOutline class="w-4 h-4" />
              <span>编辑</span>
            </NuxtLink>
            <span>|</span>
            <div
              class="flex items-center gap-x-1 cursor-pointer hover:text-red-400"
              @click="destroy"
            >
              <TrashIconOutline class="w-4 h-4" />
              <span>删除</span>
            </div>
          </div>
        </div>
      </div>
      <!-- body -->
      <div class="markdown-body" v-html="post.content.body"></div>
      <div
        class="mt-12 mb-16 cursor-pointer text-gray-600
          hover:text-black hover:underline underline-offset-2"
        @click="$router.push('/posts')"
      >
        <span>&lt;- Go to prev</span>
      </div>
    </div>
  </div>
</template>

<style>
@import url('~/assets/css/markdown.css');
</style>
