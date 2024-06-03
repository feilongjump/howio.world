<script setup lang="ts">
import Simplebar from 'simplebar-vue'
</script>

<template>
  <div class="w-dvw min-h-dvh flex">
    <div class="w-[--backstage-sidebar-w] hidden sm:block h-dvh fixed">
      <BackstageSidebar />
    </div>
    <main class="w-full max-h-dvh overflow-hidden">
      <Simplebar class="h-full">
        <div class="mx-2 sm:mx-6 sm:pl-[--backstage-sidebar-w]">
          <!-- Header -->
          <div class="h-[--backstage-header-h]">
            <BackstageHeader />
          </div>
          <!-- Main -->
          <div>
            <RouterView />
          </div>
        </div>
      </Simplebar>
    </main>
  </div>
</template>
