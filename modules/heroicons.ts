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
    addComponent({
      name: 'HomeModernIconOutline',
      export: 'HomeModernIcon',
      filePath: '@heroicons/vue/24/outline',
    })
    addComponent({
      name: 'NewspaperIconOutline',
      export: 'NewspaperIcon',
      filePath: '@heroicons/vue/24/outline',
    })
    addComponent({
      name: 'LogoutIconOutline',
      export: 'ArrowLeftStartOnRectangleIcon',
      filePath: '@heroicons/vue/24/outline',
    })
    addComponent({
      name: 'HeartIconOutline',
      export: 'HeartIcon',
      filePath: '@heroicons/vue/24/outline',
    })
    addComponent({
      name: 'CommentIconOutline',
      export: 'ChatBubbleLeftEllipsisIcon',
      filePath: '@heroicons/vue/24/outline',
    })
    addComponent({
      name: 'ClickIconOutline',
      export: 'CursorArrowRaysIcon',
      filePath: '@heroicons/vue/24/outline',
    })
  },
})
