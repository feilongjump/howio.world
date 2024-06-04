<script setup lang="ts">
import Trends from './components/Trends.vue'
</script>

<template>
  <div class="w-full h-full grid gap-x-6 grid-cols-12">
    <div class="col-span-8 grid gap-y-6">
      <div class="w-full h-96">
        <div class="h-8 flex items-center">
          <span class="text-xl font-bold text-white">Trends</span>
        </div>
        <div class="w-full h-[22rem]">
          <Trends />
        </div>
      </div>
      <div class="bg-gray-800 w-full h-96">
        second
      </div>
    </div>
    <div class="col-span-4 grid gap-y-6">
      <div class="bg-gray-800 w-full h-96">
        first
      </div>
      <div class="bg-gray-800 w-full h-96">
        second
      </div>
    </div>
  </div>
</template>

<route lang="json">
{
  "name": "backstage.index",
  "meta": {
    "icon": "BuildingStorefront",
    "layout": "backstage",
    "title": "Index",
    "order": 0
  }
}
</route>
