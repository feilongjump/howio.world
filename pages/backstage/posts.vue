<script setup lang="ts">
</script>

<template>
  <div>
    <NuxtLayout>
      <template #header>
        <div class="mb-12">
          <span class="text-xl font-bold text-gray-600 cursor-default">Posts</span>
        </div>
      </template>
      <div>
        <div v-for="i in 10"
          class="glaze-box w-96 h-56 p-6 mb-8 last:mb-0 cursor-pointer relative hover:shadow-md"
        >
          <div>
            <p class="font-bold truncate mb-1">
              <span>金融监管总局：进一步优化个人住房贷款首付比例</span>
            </p>
            <div class="flex justify-end gap-x-4">
              <div class="flex items-center gap-x-1">
                <span class="text-sm text-gray-500">88</span>
                <HeartIconOutline class="w-4 h-4 stroke-pink-600" />
              </div>
              <div class="flex items-center gap-x-1">
                <span class="text-sm text-gray-500">88</span>
                <CommentIconOutline class="w-4 h-4 stroke-sky-600" />
              </div>
              <div class="flex items-center gap-x-1">
                <span class="text-sm text-gray-500">88</span>
                <ClickIconOutline class="w-4 h-4 stroke-fuchsia-500" />
              </div>
            </div>
          </div>
          <p class="mt-4 line-clamp-4 text-justify indent-8 text-sm text-gray-600">
            在国新办1月25日举行的金融服务经济社会高质量发展新闻发布会上，金融监管总局副局长肖远企与四位主要业务司局负责人回应了房地产政策、中小银行风险形势、普惠金融监管、金融对外开放等市场热点问题。
          </p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
