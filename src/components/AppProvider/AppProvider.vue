<script setup lang="ts">
import { dateZhCN, useDialog, useLoadingBar, useMessage, useNotification, zhCN } from 'naive-ui'
import themeOverrides from './theme'

// 挂载naive组件的方法至window, 以便在全局使用
function setupNaiveTools() {
  window.$dialog = useDialog()
  window.$loadingBar = useLoadingBar()
  window.$notification = useNotification()
  window.$message = useMessage()
}
const NaiveProviderContent = defineComponent({
  setup() {
    setupNaiveTools()
  },
  render() {
    return h('div')
  },
})
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
    relative
  >
    <n-dialog-provider>
      <n-loading-bar-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot />
            <Footer />
            <NaiveProviderContent />
          </n-message-provider>
        </n-notification-provider>
      </n-loading-bar-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>
