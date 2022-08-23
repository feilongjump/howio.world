import { defineStore } from 'pinia'
import localforage from 'localforage'
import type { CollapseClassType } from '@/types/SideBar'

export const useAppStore = defineStore('app', () => {
  const sidebar = ref<CollapseClassType>('open-sidebar')
  // todo: 有可能再来修复你
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localforage.getItem('sidebar_state', (err, value: any) => {
    const state: CollapseClassType = value
    if (state) {
      sidebar.value = state
    }
  })

  function switchSidebar(value: CollapseClassType) {
    sidebar.value = value
    localforage.setItem('sidebar_state', value)
  }

  return {
    sidebar,
    switchSidebar
  }
})
