<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { switchSidebar } from '@/utils/sidebar'
import type { CollapseClassType } from '@/types/SideBar'

const stateClass = ref<CollapseClassType>(switchSidebar())

const appStore = useAppStore()

watch(
  () => appStore.sidebar,
  (newVal) => {
    stateClass.value = newVal
  }
)
</script>

<template>
  <div
    class="switch-container flex items-center cursor-pointer"
    :class="stateClass"
    @click="switchSidebar"
  >
    <div class="circular"></div>
  </div>
</template>

<style lang="scss" scoped>
.switch-container {
  width: 3rem;
  height: 1.25rem;
  padding: 0 0.35rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  transition: all 0.3s linear;

  .circular {
    width: 0.75rem;
    height: 0.75rem;
    border: 2px solid #555;
    border-radius: 50%;
    transition: all 0.3s linear;
  }
}

.open-sidebar {
  .circular {
    transform: translateX(190%);
  }
}

.draw-back-sidebar {
  background-color: #eee;

  .circular {
    border-color: #aaa;
    border-color: #888;
    transform: translateX(90%);
  }
}

.hidden-sidebar {
  background-color: #ddd;

  .circular {
    background-color: #fff;
    border-color: #fff;
    transform: translateX(0);
  }
}
</style>
