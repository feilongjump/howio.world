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
import Form from './components/form.vue'
import { renderIcon } from '~utils/index.ts'
import avatar from '~assets/avatar.jpg'
import demo1 from '~assets/demo/1.jpg'
import demo2 from '~assets/demo/2.jpg'
import demo3 from '~assets/demo/3.jpg'
import demo4 from '~assets/demo/4.jpg'
import demo5 from '~assets/demo/5.jpg'
import useMyFetch from '~utils/fetch'

interface Post {
  id: number
  title: string
  published_at: string
  imgs: string[] | null
}

const posts = ref<Post[]>([])
const pageMeta = ref()
const editPostId = ref('')

const text = [
  '今天是个美好的一天！天空湛蓝☀️，微风拂过，心情格外舒畅😊。打算约上好友一起去郊游🌳，放松身心，感受大自然的魅力🌺🌿。在这个美好的时刻，让我们忘记烦恼，尽情享受每一刻的快乐！加油💪！',
  'Today is a wonderful day! The sun is shining brightly ☀️, and there\'s a gentle breeze blowing, making me feel extra cheerful 😊. Planning to go for a picnic 🧺 with friends, surrounded by the beauty of nature 🌳🌻. In moments like these, let\'s forget our worries and soak in the joy of the present! Let\'s make today amazing! 🎉',
]

function handleOptions(postId: number) {
  const options = [
    {
      label: 'Edit',
      key: `edit|${postId}`,
      icon: renderIcon(SquarePen, { class: ['text-blue-300'] }),
    },
    {
      label: 'Delete',
      key: `delete|${postId}`,
      icon: renderIcon(Trash2, { class: ['text-red-300'] }),
    },
  ]

  return options
}

function create() {
  editPostId.value = ''
}

function search() {
  window.$message.info('Search Posts.')
}

async function handleSelect(keyStr: string) {
  const [key, postId] = keyStr.split('|')

  if (key === 'edit') { editPostId.value = postId }
  else {
    await useMyFetch(`posts/${postId}`).delete().json()
    window.$message.success('删除成功')
    getPosts()
  }
}

// todo: Delete
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

async function getPosts() {
  const { data } = await useMyFetch('posts').get().json()
  // todo: Delete
  data.value.data.map((item: Post) => {
    item.published_at = '好多天前'
    item.imgs = demoCharts()

    return item
  })
  posts.value = data.value.data
  pageMeta.value = data.value.meta
}

onMounted(() => {
  getPosts()
})
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
                h-full w-full border-none p-0 pl-2 outline-none
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
              p-6 pr-0 hover:bg-gray-50
              border-b="1 solid gray-50"
            >
              <div flex justify-between border-r="3 solid blue-300">
                <div w-72 flex items-center>
                  <img mr-2 h-8 w-8 rounded-lg :src="avatar">
                  <span truncate font-bold>{{ post.title }}</span>
                </div>
                <div w-24 flex items-center justify-between pr-2>
                  <span text-xs text-gray-400>{{ post.published_at }}</span>
                  <n-dropdown
                    trigger="click"
                    :options="handleOptions(post.id)"
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
              <div mb-8 pr-2>
                <p line-clamp-5>
                  {{ text[index % 2] }}
                </p>
              </div>
              <div flex items-end justify-between pr-2>
                <div
                  v-if="post.imgs"
                  h-16 max-w-52 flex gap-x-2 overflow-hidden rounded-xl p-2
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
      <!-- form -->
      <Form
        :id="editPostId"
        @reload="getPosts"
      />
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
