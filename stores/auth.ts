import { Base64 } from 'js-base64'

interface User {
  id: number
  name: string
  email: string
  created_at: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {} as User,
    token: '',
    expired_at: 0
  }),
  actions: {
    setUser(user: User) {
      if (! user) return

      this.user = user
    },
    setToken(token: string) {
      if (! token) return

      this.token = token

      // 从 token 中获取过期时间
      const tokenArr = token.split('.')
      // 设置过期时间
      this.expired_at = JSON.parse(Base64.decode(tokenArr[1])).exp
    },
    clear() {
      this.user = {} as User
      this.token = ''
      this.expired_at = 0
    }
  },
})
