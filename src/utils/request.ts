import { createFetch } from '@vueuse/core'
import autolog from 'autolog.js'

const useRequest = createFetch({
  baseUrl: import.meta.env.VITE_APP_API_URL,
  options: {
    timeout: 5000,
    beforeFetch({ options }) {
      const token = useStorage('token', null)

      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json; charset=utf-8',
      }

      if (token !== null) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token.value}`,
        }
      }

      return { options }
    },

    // 错误拦截
    onFetchError({ data, error, response }) {
      if (response?.status !== undefined && response?.status >= 200 && response?.status < 300)
        return { data, error, response }

      switch (response?.status) {
        case 403:
        case 422:
          autolog.log(data.message, 'error')
          break
        default:
          autolog.log('完了，不知道出现了什么问题！', 'error')
          autolog.log(`HTTP 状态码：${response?.status}`, 'error')
          autolog.log(data.message || '好像也没有获取到响应信息', 'error')
          break
      }

      return { data, error, response }
    },

  },
})

export default useRequest
