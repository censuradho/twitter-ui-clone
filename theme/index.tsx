import { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import GloalStyles from 'theme/GlobalStyles';

import { defaultTheme } from 'theme/template'

interface ThemeProviderProps {
  children: ReactNode
}

function ThemeProvider ({ children }: ThemeProviderProps) {
  
  return (
    <StyledThemeProvider theme={defaultTheme}>
      <GloalStyles />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider