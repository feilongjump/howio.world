<script setup lang="ts">
const { user } = useAuthStore()

const sayHello = () => alert(`Hello, ${user?.name} !`)
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center gap-x-4">
    <NuxtLink to="/posts">Posts</NuxtLink>
    <span class="cursor-pointer"
      v-if="! isEmpty(user)"
      @click="sayHello()"
    >Hello, {{ user.name }} !</span>
    <NuxtLink to="/auth" v-else>Sign In</NuxtLink>
  </div>
</template>
