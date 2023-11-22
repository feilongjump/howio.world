<script setup lang="ts">
const route = useRoute()

const post = {
  id: route.params.post,
  title: 'First posts',
  published_at: '前年',
  body: '',
  tags: [
    'Vue3', 'Nuxt3', 'TypeScript', 'Tailwind CSS'
  ]
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
        <div class="flex gap-x-4 text-sm text-gray-400">
          <span class="mr-1">{{ post.published_at }}</span>
          <span class="" v-for="tag in post.tags">{{ tag }}</span>
        </div>
      </div>
      <!-- body -->
      <div>{{ post.body }}</div>
      <!-- TODO: Delete -->
      <div class="flex flex-col gap-y-5">
        <p class="indent-8 leading-6 tracking-wider">
          我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 问题的关键究竟为何？
          我们都知道，只要有意义，那么就必须慎重考虑。 现在，解决随机生成的问题，是非常非常重要的。
          所以， 所谓随机生成，关键是随机生成需要如何写。 随机生成，发生了会如何，不发生又会如何。
          要想清楚，随机生成，到底是一种怎么样的存在。
          这样看来， 培根在不经意间这样说过，合理安排时间，就等于节约时间。
          我希望诸位也能好好地体会这句话。 带着这些问题，我们来审视一下随机生成。
          莎士比亚说过一句富有哲理的话，本来无望的事，大胆尝试，往往能成功。
          这似乎解答了我的疑惑。 随机生成，到底应该如何实现。
          总结的来说， 带着这些问题，我们来审视一下随机生成。
        </p>
        <p class="indent-8 leading-6 tracking-wider">
          生活中，若随机生成出现了，我们就不得不考虑它出现了的事实。
          总结的来说， 问题的关键究竟为何？ 问题的关键究竟为何？
          那么， 所谓随机生成，关键是随机生成需要如何写。
          吉姆·罗恩在不经意间这样说过，要么你主宰生活，要么你被生活主宰。
          我希望诸位也能好好地体会这句话。
          我认为， 鲁巴金在不经意间这样说过，读书是在别人思想的帮助下，建立起自己的思想。
          我希望诸位也能好好地体会这句话。 而这些并不是完全重要，更加重要的问题是。
        </p>
        <p class="indent-8 leading-6 tracking-wider">
          苏轼曾经说过，古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。我希望诸位也能好好地体会这句话。
          总结的来说， 我们不得不面对一个非常尴尬的事实，那就是，
          我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。
          从这个角度来看， 我认为， 我们都知道，只要有意义，那么就必须慎重考虑。
          随机生成，到底应该如何实现。 从这个角度来看， 现在，解决随机生成的问题，是非常非常重要的。
          所以， 一般来说， 对我个人而言，随机生成不仅仅是一个重大的事件，还可能会改变我的人生。
          每个人都不得不面对这些问题。 在面对这种问题时，
          我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。
          总结的来说， 问题的关键究竟为何？ 就我个人来说，随机生成对我的意义，不能不说非常重大。
          随机生成的发生，到底需要如何做到，不随机生成的发生，又会如何产生。
          既然如何， 卡莱尔曾经提到过，过去一切时代的精华尽在书中。这句话语虽然很短，但令我浮想联翩。
          经过上述讨论， 随机生成，到底应该如何实现。 带着这些问题，我们来审视一下随机生成。
        </p>
      </div>
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

