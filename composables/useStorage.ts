export const useStorage = {
  clear: () => {
    localStorage.clear()
  },
  getItem: <T = any>(key: string): T | null => {
    const data = localStorage.getItem(key)
    if (! data) return null

    return JSON.parse(data)
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key)
  },
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value)
  }
}
