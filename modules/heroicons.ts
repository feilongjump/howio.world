import { addComponent, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup() {
    // outline icons
    addComponent({
      name: 'PencilIconOutline',
      export: 'PencilIcon',
      filePath: '@heroicons/vue/24/outline',
    })
    addComponent({
      name: 'PencilSquareIconOutline',
      export: 'PencilSquareIcon',
      filePath: '@heroicons/vue/24/outline',
    })
    addComponent({
      name: 'TrashIconOutline',
      export: 'TrashIcon',
      filePath: '@heroicons/vue/24/outline',
    })
  },
})
