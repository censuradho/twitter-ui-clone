import { ReactNode } from "react";

import { Navigation } from './components'

import * as Styles from './styles'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout ({ children }: MainLayoutProps) {

  return (
    <Styles.Container>

      <Navigation /> 
      <Styles.Wrapper>
        {children}
      </Styles.Wrapper>
    </Styles.Container>
  )
}

