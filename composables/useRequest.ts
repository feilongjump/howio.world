import dayjs from 'dayjs'
import type { FetchContext, FetchResponse } from 'ofetch'
import type { UseFetchOptions } from 'nuxt/dist/app/composables'

interface SearchParameters {
  [key: string]: any
}

class Request {
  public baseURL: string

  constructor(baseURL?: string) {
    const config = useRuntimeConfig()

    this.baseURL = baseURL || config.public.apiBase
  }

  /**
   * 发起请求
   */
  initiate<T = any>(url: string, options: UseFetchOptions<T>) {

    return useFetch(url, {
      ...options,

      baseURL: this.baseURL,
      // 请求失败，是否发起多次请求，仅限 GET
      retry: 0,

      // 监听一组响应式源，并在它们发生变化时自动刷新获取的结果。
      // https://nuxt.com/docs/api/composables/use-fetch#params
      watch: false,

      onRequest: this.onRequest,
      onResponseError: this.onResponseError
    })
  }

  /**
   * 请求拦截器
   */
  onRequest ({options}: FetchContext) {
    options.headers = (options.headers as { [key: string]: string }) || ({} as { [key: string]: string })

    const auth = useAuthStore()

    if (auth.token && auth.expired_at) {
      if (auth.expired_at <=  dayjs().unix()) {
        // TODO: 此处应该取消当前的请求
        auth.clear()
        alert('您的登录信息已过期，请重新登录！')
        useRouter().push({name: 'auth'})
        return
      }

      options.headers.Authorization = 'Bearer ' + auth.token
    }
  }

  /**
   * 响应错误处理
   */
  onResponseError<T = any>(ctx: FetchContext & FetchResponse<T>) {
    switch (ctx.response?.status) {
      case 401:
        alert('请先登录')
        useRouter().push({name: 'auth'})
        break
      case 422:
        const errors = ctx.response._data.error
        Object.values(errors).reverse().forEach(item => {
          alert(item)
        })
        break
      case 500:
        alert('完了，服务器发生错误了！')
        break
    }
  }
}

export const useRequest = {
  get: <T = any>(url: string, query?: SearchParameters, options?: UseFetchOptions<T>) => {
    return new Request().initiate(url, {
      ...options,
      query,
      method: 'GET'
    })
  },
  post: <T = any>(url: string, body?: SearchParameters, options?: UseFetchOptions<T>) => {
    return new Request().initiate(url, {
      ...options,
      body,
      method: 'POST'
    })
  }
}
