<script setup lang="ts">
import { useAppStore } from '@/stores/app'

type StateClass = 'open' | 'close'
const stateClass = ref<StateClass>('open')

const appStore = useAppStore()

const switchState = () => {
  stateClass.value = stateClass.value === 'open' ? 'close' : 'open'

  appStore.switchSidebar()
}
</script>

<template>
  <div
    class="switch-container flex items-center cursor-pointer"
    :class="stateClass"
    @click="switchState"
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
  transition: all 0.5s linear;

  .circular {
    width: 0.75rem;
    height: 0.75rem;
    border: 2px solid #555;
    border-radius: 50%;
    transition: all 0.5s linear;
  }
}

.open {
  .circular {
    transform: translateX(190%);
  }
}

.close {
  background-color: #ddd;

  .circular {
    background-color: #fff;
    border-color: #fff;
    transform: translateX(0);
  }
}
</style>
