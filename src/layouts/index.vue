<script setup lang="ts">
</script>

<template>
  <n-layout min-h-screen>
    <n-layout position="absolute" has-sider>
      <Sidebar />
      <n-layout :native-scrollbar="false">
        <RouterView />
      </n-layout>
    </n-layout>
  </n-layout>
</template>
