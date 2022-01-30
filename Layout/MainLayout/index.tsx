import { ReactNode } from "react";
import { Flex } from "styles/Flex";

import { Navigation } from './components'

import * as Styles from './styles'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout ({ children }: MainLayoutProps) {

  return (
    <Styles.Container>
      <Styles.Content>
        <Navigation /> 
        <Styles.Wrapper>
          {children}
        </Styles.Wrapper>
      </Styles.Content>
    </Styles.Container>
  )
}

