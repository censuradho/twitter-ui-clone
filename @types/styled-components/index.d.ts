import 'styled-components'

import { defaultTheme } from 'theme/template/default'

type Theme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}