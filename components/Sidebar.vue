<script setup lang="ts">
</script>

<template>
  <div id="sidebar-container" class="glaze-box">
    <div class="w-full h-12 flex justify-center items-center">
      <img class="w-12 h-12 rounded-full" src="~/assets/img/avatar.jpg" />
    </div>

    <!-- menu -->
    <div class="menu-box">
      <NuxtLink to="/backstage">
        <HomeModernIconOutline class="icon" />
      </NuxtLink>
      <NuxtLink to="/backstage/posts">
        <NewspaperIconOutline class="icon" />
      </NuxtLink>
    </div>

    <div class="w-full h-12 flex justify-center items-center">
      <LogoutIconOutline class="w-6 h-6 stroke-slate-500 hover:stroke-red-400 cursor-pointer" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
#sidebar-container {
  @apply fixed w-24 py-4 flex flex-col items-center justify-between;

  height: calc(theme('height.screen') - theme('padding.16'));

  .menu-box {
    @apply flex flex-col gap-12;

    .icon {
      @apply w-6 h-6 stroke-slate-500 cursor-pointer hover:fill-cyan-300;
    }
  }
}
</style>
