<script setup lang="ts">
const { user } = useAuthStore()
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center gap-x-4">
    <NuxtLink to="/posts">Posts</NuxtLink>
    <NuxtLink to="/backstage" v-if="! isEmpty(user)">Hello, {{ user.name }} !</NuxtLink>
    <NuxtLink to="/auth" v-else>Sign In</NuxtLink>
  </div>
</template>
