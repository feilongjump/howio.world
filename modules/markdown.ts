import { addComponent, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup() {
    // 编辑器
    addComponent({
      name: 'MarkdownEditor',
      export: 'Editor',
      filePath: '@bytemd/vue-next',
    })
  },
})
