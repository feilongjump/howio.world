import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue'],
      routesFolder: [
        {
          src: 'src/pages/index',
          path: '/',
        },
        {
          src: 'src/pages/backstage',
          path: 'backstage/',
        },
      ],
      dts: 'src/typed-router.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: 'src/components.d.ts',
    }),
    vue(),
    UnoCSS(),
  ],
})
