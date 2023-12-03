// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-lodash'],
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
    cssPath: '~/assets/css/app.css',
    // 运行时解析 tailwind.config.ts 文件配置
    // 更改了 theme.extend.backgroundImage.grid 值，在运行中好像并没有发生改变，所以暂时关闭
    exposeConfig: false,
    // tailwind 查看器 https://tailwindcss.nuxtjs.org/getting-started/options#viewer
    viewer: false
  },
  typescript: {
    // 构建时，进行类型检查 https://nuxt.com.cn/docs/api/nuxt-config#typecheck
    typeCheck: true
  }
})
