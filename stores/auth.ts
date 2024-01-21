import { Base64 } from 'js-base64'

interface User {
  id: number
  name: string
  email: string
  created_at: string
}

interface Auth {
  user: User
  token: string
  expired_at: number
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User>()
  const token = ref('')
  const expired_at = ref(0)

  // 判断本地存储中是否存在一些必要的数据
  const auth = useStorage.getItem<Auth>('auth')
  if (auth && dayjs().isBefore(dayjs(auth.expired_at * 1000))) {
    // 登录时间未过期
    expired_at.value = auth.expired_at
    token.value = auth.token
    user.value = auth.user
  }

  const setUser = (userParams: User) => {
    if (! userParams) return

    user.value = userParams
  }
  const setToken = (token: string) => {
    if (! token) return

    token = token

    // 从 token 中获取过期时间
    const tokenArr = token.split('.')
    // 设置过期时间
    expired_at.value = JSON.parse(Base64.decode(tokenArr[1])).exp
  }
  const clear = () => {
    user.value = {} as User
    token.value = ''
    expired_at.value = 0
  }

  return {
    user, token, expired_at,
    setUser, setToken, clear
  }
})
