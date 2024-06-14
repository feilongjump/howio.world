<script setup lang="ts">
import {
  CursorArrowRaysIcon,
  FunnelIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline'
import Simplebar from 'simplebar-vue'

const imgs = [
  'https://cdn.pixabay.com/photo/2023/10/18/08/38/milkshake-8323288_640.jpg',
  'https://cdn.pixabay.com/photo/2024/05/11/06/47/tropical-8754092_640.jpg',
  'https://cdn.pixabay.com/photo/2023/09/21/14/15/background-8266762_640.jpg',
]
</script>

<template>
  <div class="posts-container">
    <!-- list -->
    <div class="w-[28rem] pr-1 border-r">
      <Simplebar class="h-full">
        <div class="h-12 mr-4 px-2 border-b flex justify-between items-center">
          <div class="cursor-pointer">
            <FunnelIcon class="w-5 h-5" />
          </div>
          <div class="flex items-center gap-x-2 cursor-pointer hover:text-blue-500">
            <span>Create Posts</span>
            <PlusCircleIcon class="w-5 h-5" />
          </div>
        </div>
        <div
          v-for="i in 10" :key="i"
          class="border-b border-gray-900 pt-6 pb-2 px-2 mr-4"
        >
          <div class="flex items-center gap-x-3">
            <img src="@/assets/avatar.png" class="h-8 w-8 rounded-xl">
            <span class="font-bold text-lg">Title</span>
          </div>
          <p class="my-4 text-xs line-clamp-8">
            今天是个美好的一天！天空湛蓝☀️，微风拂过，心情格外舒畅😊。打算约上好友一起去郊游🌳，放松身心，感受大自然的魅力🌺🌿。在这个美好的时刻，让我们忘记烦恼，尽情享受每一刻的快乐！加油💪！
          </p>
          <div class="flex justify-between items-end">
            <div class="rounded-xl border border-gray-400 p-2 flex gap-x-2">
              <img
                v-for="(imgSrc, idx) in imgs" :key="idx" :src="imgSrc"
                class="h-16 w-16 rounded-xl"
              >
            </div>
            <div class="flex items-center border p-2 rounded-xl text-color-gray">
              <div class="flex items-center gap-x-1 cursor-pointer hover:text-blue-300">
                <span>666</span>
                <CursorArrowRaysIcon class="w-4 h-4" />
              </div>
              <div class="mx-2 px-2 border-x">
                <div class="cursor-pointer hover:text-blue-500">
                  <PencilSquareIcon class="w-4 h-4" />
                </div>
              </div>
              <div class="cursor-pointer hover:text-pink-500">
                <TrashIcon class="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Simplebar>
    </div>
    <!-- form -->
    <div class="flex-1 bg-gray-900">
      right
    </div>
  </div>
</template>

<route lang="json">
{
  "name": "backstage.posts",
  "meta": {
    "icon": "BookOpen",
    "layout": "backstage",
    "title": "Posts",
    "order": 1
  }
}
</route>

<style scoped>
.posts-container {
  width: 100%;
  max-height: calc(100dvh - var(--backstage-header-h));
  overflow-y: hidden;
  display: flex;
}
</style>
