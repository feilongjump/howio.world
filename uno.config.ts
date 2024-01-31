import {
  defineConfig,
  presetAttributify,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [
    // unocss 预设
    presetUno(),
    // 支持attributify mode,简单说就是为了避免样式写太长难维护，能将 py-2 px-2这种相关属性整合起来写成 p="y-2 x-4"
    presetAttributify(),
  ],
})
