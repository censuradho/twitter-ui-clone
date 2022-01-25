import { ReactNode } from "react";


import * as Styles from './styles'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout ({ children }: MainLayoutProps) {
  return (
    <Styles.Container>  
      <Styles.Wrapper>
        {children}
      </Styles.Wrapper>
    </Styles.Container>
  )
}

