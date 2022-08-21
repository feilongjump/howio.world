import { defineStore } from 'pinia'
import type { CollapseClassType } from '@/types/SideBar'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebar: <CollapseClassType>'open-sidebar'
  }),
  getters: {
    sidebarState(): CollapseClassType {
      return this.sidebar
    }
  },
  actions: {
    switchSidebar(value: CollapseClassType) {
      this.sidebar = value
    }
  }
})
