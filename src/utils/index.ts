import { NIcon } from 'naive-ui'

interface RenderIconProps {
  class?: Array<string>
}
/**
 * 渲染 icon
 *
 * @param icon Component
 * @param props IconProps
 * @returns VNode
 */
export function renderIcon(icon: Component, props?: RenderIconProps) {
  return () => {
    return h(NIcon, { class: props?.class }, {
      default: () => h(icon),
    })
  }
}
