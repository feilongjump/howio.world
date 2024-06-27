import type { BytemdPlugin } from 'bytemd'

import gfm from '@bytemd/plugin-gfm'
import breaks from '@bytemd/plugin-breaks'
import gemoji from '@bytemd/plugin-gemoji'
import mermaid from '@bytemd/plugin-mermaid'
import highlight from '@bytemd/plugin-highlight'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import frontmatter from '@bytemd/plugin-frontmatter'

const plugins: BytemdPlugin[] = [
  breaks(),
  highlight(),
  frontmatter(),
  gfm(),
  mediumZoom(),
  gemoji(),
  mermaid(),
]

export default plugins
