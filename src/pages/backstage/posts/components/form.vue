<script setup lang="ts">
const props = defineProps({
  id: String,
})

watch(() => props.id, (newVal: string) => {
  console.info(newVal)
})

const post = ref({
  title: '',
  content: '',
})

/**
 * 接收 markdown 内容
 *
 * @param markdown string
 */
function receive(content: string) {
  post.value.content = content
}

function submit() {
  console.info(post.value)
}
</script>

<template>
  <div flex-1>
    <div relative>
      <input
        v-model="post.title"
        h-12 w-full border-none pl-8 text-xl outline-none
        type="text"
        placeholder="请输入标题。"
      >
      <n-button
        absolute inset-y-2 right-8
        type="info"
        @click="submit"
      >
        发布
      </n-button>
    </div>
    <div
      b-t="1 solid gray-300"
    >
      <Editor
        v-model:value="post.content"
        placeholder="几乎所有好的写作都是从糟糕的第一次努力开始的。"
        class="h-[calc(100vh-8rem-4px)]"
        @update:value="receive"
      />
    </div>
  </div>
</template>
