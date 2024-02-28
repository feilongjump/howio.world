<script setup lang="ts">
import { StorageSerializers } from '@vueuse/core'

const user = useStorage('user', null, undefined, { serializer: StorageSerializers.object })
</script>

<template>
  <div h-screen w-screen flex items-center justify-center gap-x-4>
    <RouterLink :to="{ name: 'posts' }">
      Posts
    </RouterLink>
    <RouterLink v-if="user" :to="{ name: 'backstage' }">
      Hello, {{ user.name }} !
    </RouterLink>
    <RouterLink v-else :to="{ name: 'sign-in' }">
      Sign In
    </RouterLink>
  </div>
</template>

<route lang="json">
{
  "name": "index"
}
</route>
