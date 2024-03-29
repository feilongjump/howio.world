import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [
    // unocss 预设
    presetUno(),
    // 支持attributify mode,简单说就是为了避免样式写太长难维护，能将 py-2 px-2这种相关属性整合起来写成 p="y-2 x-4"
    presetAttributify(),
    presetTypography({
      selectorName: 'markdown-body',
      cssExtend: {
        'a': {
          'color': '#60a5fa',
          'text-underline-offset': '3px',
        },
        'blockquote': {
          'background-color': '#f0fdff',
          'padding': '1px 20px',
          'color': '#8c8c8c',
          'border-left': '4px solid #2196f3',
          'margin': '20px 0',
          'font-style': 'normal',
        },
        'h2': {
          'border-bottom': '1px solid #e5e7eb',
        },
        'hr': {
          margin: '2em 0',
          border: '1px solid #e5e7eb',
        },
        'td': {
          border: '1px solid #dfe2e5',
        },
        'th': {
          border: '1px solid #dfe2e5',
        },
        ':not(pre) > code': {
          'background-color': '#fff1f2',
          'color': '#ea580c',
          'border': '1px solid #fff1f2',
          'border-radius': '5px',
          'padding': '3px',
          'padding-left': '5px',
        },
        ':not(pre) > code::before,:not(pre) > code::after': {
          content: '""',
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
