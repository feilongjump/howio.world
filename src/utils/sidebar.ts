import { useAppStore } from '@/stores/app'
import type { CollapseClassType } from '@/types/SideBar'

/**
 * 侧边栏显示
 * @returns CollapseClassType
 */
const switchSidebar = (): CollapseClassType => {
  const appStore = useAppStore()
  // 每级进行递减，当值为隐藏，再次点击将其展开所有
  let switchValue: CollapseClassType

  switch (appStore.sidebar) {
    case 'open-sidebar':
      switchValue = 'draw-back-sidebar'
      break
    case 'draw-back-sidebar':
      switchValue = 'hidden-sidebar'
      break
    case 'hidden-sidebar':
      switchValue = 'open-sidebar'
      break
  }

  appStore.switchSidebar(switchValue)

  return switchValue
}

export { switchSidebar }
