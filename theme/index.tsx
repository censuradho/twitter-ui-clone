import { ReactNode } from 'react'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { defaultTheme } from 'theme/template'

interface ThemeProviderProps {
  children: ReactNode
}

function ThemeProvider ({ children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={defaultTheme}>
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider