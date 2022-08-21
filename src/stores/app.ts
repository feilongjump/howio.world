import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebar: true
  }),
  getters: {
    sidebarState(): boolean {
      return this.sidebar
    }
  },
  actions: {
    switchSidebar() {
      this.sidebar = !this.sidebar
    }
  }
})
