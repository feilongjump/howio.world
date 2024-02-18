<script setup lang="ts">
import {
  Eye,
  LandPlot,
  MessageSquareMore,
  MoreHorizontal,
  PlusCircle,
  Search,
  SquarePen,
  Trash2,
} from 'lucide-vue-next'
import { renderIcon } from '~/utils/index'
import demo1 from '/src/assets/demo/1.jpg'
import demo2 from '/src/assets/demo/2.jpg'
import demo3 from '/src/assets/demo/3.jpg'
import demo4 from '/src/assets/demo/4.jpg'
import demo5 from '/src/assets/demo/5.jpg'

const text = [
  '今天是个美好的一天！天空湛蓝☀️，微风拂过，心情格外舒畅😊。打算约上好友一起去郊游🌳，放松身心，感受大自然的魅力🌺🌿。在这个美好的时刻，让我们忘记烦恼，尽情享受每一刻的快乐！加油💪！',
  'Today is a wonderful day! The sun is shining brightly ☀️, and there\'s a gentle breeze blowing, making me feel extra cheerful 😊. Planning to go for a picnic 🧺 with friends, surrounded by the beauty of nature 🌳🌻. In moments like these, let\'s forget our worries and soak in the joy of the present! Let\'s make today amazing! 🎉',
]

function demoCharts() {
  const quantity = Math.floor(Math.random() * 5)
  if (quantity === 0)
    return null

  const charts = [demo1, demo2, demo3, demo4, demo5]

  // 创建一个副本数组，用于存储随机选择的元素
  const result = charts.slice()
  const length = result.length

  // 如果要取出的数量超过数组长度，则返回整个数组
  if (quantity >= length)
    return result

  // 遍历数组，随机交换元素位置，取前 num 个元素
  for (let i = 0; i < quantity; i++) {
    const randomIndex = Math.floor(Math.random() * (length - i)) + i
    // 交换元素位置
    const temp = result[i]
    result[i] = result[randomIndex]
    result[randomIndex] = temp
  }

  // 返回随机选择的元素
  return result.slice(0, quantity)
}

const posts = [
  {
    id: 1,
    title: 'This is a posts title.',
    avatar: '/src/assets/avatar.jpg',
    published_at: '1 DAY AGO',
    imgs: demoCharts(),
  },
  {
    id: 2,
    title: 'This is a posts title.',
    avatar: '/src/assets/avatar.jpg',
    published_at: '1 DAY AGO',
    imgs: demoCharts(),
  },
  {
    id: 3,
    title: 'This is a posts title.',
    avatar: '/src/assets/avatar.jpg',
    published_at: '1 DAY AGO',
    imgs: demoCharts(),
  },
  {
    id: 4,
    title: 'This is a posts title.',
    avatar: '/src/assets/avatar.jpg',
    published_at: '1 DAY AGO',
    imgs: demoCharts(),
  },
  {
    id: 5,
    title: 'This is a posts title.',
    avatar: '/src/assets/avatar.jpg',
    published_at: '1 DAY AGO',
    imgs: demoCharts(),
  },
  {
    id: 6,
    title: 'This is a posts title.',
    avatar: '/src/assets/avatar.jpg',
    published_at: '1 DAY AGO',
    imgs: demoCharts(),
  },
  {
    id: 7,
    title: 'This is a posts title.',
    avatar: '/src/assets/avatar.jpg',
    published_at: '1 DAY AGO',
    imgs: demoCharts(),
  },
  {
    id: 8,
    title: 'This is a posts title.',
    avatar: '/src/assets/avatar.jpg',
    published_at: '1 DAY AGO',
    imgs: demoCharts(),
  },
]

const options = [
  {
    label: 'Edit',
    key: 'edit',
    icon: renderIcon(SquarePen, { class: ['text-blue-300'] }),
  },
  {
    label: 'Delete',
    key: 'delete',
    icon: renderIcon(Trash2, { class: ['text-red-300'] }),
  },
]

function create() {
  window.$message.info('Create Posts.')
}

function search() {
  window.$message.info('Search Posts.')
}

function handleSelect(key: string) {
  window.$message.info(key)
}
</script>

<template>
  <div h-screen w-full>
    <!-- top -->
    <div
      mx-1 h-20 flex items-center justify-between px-5
      border-b="1 solid gray-300"
    >
      <div flex cursor-pointer items-center gap-x-2 @click="create">
        <n-icon class="text-blue-400/80" size="32">
          <PlusCircle />
        </n-icon>
        <span text-lg text-gray-600>Create Posts</span>
      </div>
    </div>
    <!-- main -->
    <div flex>
      <!-- left -->
      <div w-118 border-r="1 solid gray-200">
        <n-scrollbar class="h-[calc(100vh-5rem-1px)]" trigger="none">
          <!-- search -->
          <div
            ml-6 mr-13px h-10
            border-r="1 solid gray-200"
          >
            <div
              mr-2 h-full flex items-center justify-between
              border-b="1 solid gray-200"
            >
              <input
                h-full w-full border-none p-0 pl-2 focus:outline-none
                placeholder="Search posts"
                type="text"
              >
              <n-icon mx-2 cursor-pointer text-gray-800 size="16" @click="search">
                <Search />
              </n-icon>
            </div>
          </div>
          <div
            mr-13px
            class="min-h-[calc(100vh-7.5rem-1px)]"
            border-r="1 solid gray-200"
          >
            <div
              v-for="(post, index) in posts"
              :key="index"
              max-h-64 p-6 pr-0 hover:bg-gray-50
              border-b="1 solid gray-50"
            >
              <div flex justify-between border-r="3 solid blue-300">
                <div w-72 flex items-center>
                  <img mr-2 h-8 w-8 rounded-lg :src="post.avatar">
                  <span truncate font-bold>{{ post.title }}</span>
                </div>
                <div w-24 flex items-center justify-between pr-2>
                  <span text-xs text-gray-400>{{ post.published_at }}</span>
                  <n-dropdown
                    trigger="click"
                    :options="options"
                    :show-arrow="true"
                    @select="handleSelect"
                  >
                    <n-icon cursor-pointer text-gray-400 size="16">
                      <MoreHorizontal />
                    </n-icon>
                  </n-dropdown>
                </div>
              </div>
              <!-- abstract -->
              <div pr-2>
                <p line-clamp-5>
                  {{ text[index % 2] }}
                </p>
              </div>
              <div flex items-end justify-between pr-2>
                <div
                  v-if="post.imgs"
                  h-16 flex gap-x-2 overflow-hidden rounded-xl p-2
                  border="1 solid gray-300"
                >
                  <n-image
                    v-for="(imgSrc, j) in post.imgs" :key="j"
                    width="64" height="64"
                    rounded-xl
                    :src="imgSrc"
                  />
                </div>
                <!-- 占位 -->
                <div v-else />
                <div
                  flex gap-x-2 rounded-xl p-2 text-gray-500
                  border="1 solid gray-300"
                >
                  <div
                    flex cursor-pointer items-center justify-center
                    hover:text-blue-400
                  >
                    <n-icon size="20">
                      <LandPlot />
                    </n-icon>
                    <span ml-1 text-xs>{{ Math.floor(Math.random() * 888) }}</span>
                  </div>
                  <div
                    flex cursor-pointer items-center justify-center px-2
                    hover:text-blue-400
                    border-x="1 solid gray-300"
                  >
                    <n-icon size="20">
                      <MessageSquareMore />
                    </n-icon>
                    <span ml-1 text-xs>{{ Math.floor(Math.random() * 888) }}</span>
                  </div>
                  <div
                    flex cursor-pointer items-center justify-center
                    hover:text-blue-400
                  >
                    <n-icon size="20">
                      <Eye />
                    </n-icon>
                    <span ml-1 text-xs>{{ Math.floor(Math.random() * 888) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </n-scrollbar>
      </div>
      <!-- right -->
      <div>right</div>
    </div>
  </div>
</template>

<route lang="json">
{
  "name": "backstage-posts",
  "meta": {
    "layout": "index"
  }
}
</route>
