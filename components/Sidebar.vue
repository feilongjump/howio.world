<script setup lang="ts">

const menus = [
  {
    icon: resolveComponent('HomeModernIconOutline'),
    link: '/backstage'
  },
  {
    icon: resolveComponent('NewspaperIconOutline'),
    link: '/backstage/posts'
  }
]

const { clear } = useAuthStore()
const logout = () => {
  clear()

  alert('欢迎下次光临')
  navigateTo('/')
}
</script>

<template>
  <div id="sidebar-container" class="glaze-box">
    <div class="w-full h-12 flex justify-center items-center">
      <img class="w-12 h-12 rounded-full" src="~/assets/img/avatar.jpg" />
    </div>

    <!-- menu -->
    <div class="menu-box">
      <NuxtLink
        v-for="menu in menus"
        :to="menu.link"
        :class="[$route.path === menu.link ? 'active-menu' : '']"
      >
        <component :is="menu.icon" class="icon">
        </component>
      </NuxtLink>
    </div>

    <div class="w-full h-12 flex justify-center items-center">
      <LogoutIconOutline
        @click="logout"
        class="w-6 h-6 stroke-slate-500 hover:stroke-red-400 cursor-pointer" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
#sidebar-container {
  @apply fixed w-24 py-4 flex flex-col items-center justify-between;

  height: calc(theme('height.screen') - theme('padding.16'));

  .menu-box {
    @apply flex flex-col gap-12;

    a {
      @apply w-12 h-12 bg-transparent rounded-full flex justify-center items-center;
    }
    .icon {
      @apply w-6 h-6 stroke-slate-500 bg-transparent hover:fill-cyan-300;
    }

    .active-menu {
      @apply bg-white;
      .icon {
        @apply fill-cyan-300;
      }
    }
  }
}
</style>
