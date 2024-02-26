import { createFetch } from '@vueuse/core'

const useMyFetch = createFetch({
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
        case 422:
          for (const errKey in data.error)
            window.$message.error(data.error[errKey])

          break
        default:
          window.$notification.error({
            duration: 3000,
            title: '完了，不知道出现了什么问题！',
            content: error.message,
          })
          break
      }

      return { data, error, response }
    },

  },
  fetchOptions: {
    mode: 'cors',
  },
})

export default useMyFetch
