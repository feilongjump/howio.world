<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import type { CollapseClassType } from '@/types/SideBar'

const stateClass = ref<CollapseClassType>('open-sidebar')

const appStore = useAppStore()

const switchState = () => {
  // 每级进行递减，当值为隐藏，再次点击将其展开所有
  let switchValue: CollapseClassType

  switch (appStore.sidebar) {
    case 'open-sidebar':
      switchValue = 'draw-back-sidebar'
      break
    case 'draw-back-sidebar':
      switchValue = 'hidden-sidebar'
      break
    case 'hidden-sidebar':
      switchValue = 'open-sidebar'
      break
  }

  stateClass.value = switchValue
  appStore.switchSidebar(switchValue)
}

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
