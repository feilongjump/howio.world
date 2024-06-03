<script setup lang="ts">
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="w-full h-full grid gap-x-6 grid-cols-12">
    <div class="col-span-8 relative text-color-gray flex items-center">
      <input
        class="w-full h-12 bg-pale-color pl-12 pr-4 rounded-full border-none outline-none
          placeholder:italic placeholder:text-[--dark-color-gray] peer focus:text-white"
        type="text"
        placeholder="Search..."
      >
      <MagnifyingGlassIcon
        class="w-5 h-5 stroke-2 peer-focus:text-white absolute left-4 top-1/2 -translate-y-1/2"
      />
    </div>
    <div class="col-span-4 flex items-center gap-x-8">
      <BellIcon class="w-5 h-5 stroke-2" />
      <div class="flex items-center gap-x-4 cursor-pointer">
        <img
          class="w-12 h-12 rounded-full shadow-lg shadow-blue-300/50"
          src="@/assets/avatar.png"
          alt="avatar"
        >
        <span>Super</span>
      </div>
    </div>
  </div>
</template>
