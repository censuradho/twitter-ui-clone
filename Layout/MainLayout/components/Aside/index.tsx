import { TextField } from "components"
import { memo, ReactNode } from "react"

import * as Styles from './styles'

interface AsideProps {
  children: ReactNode
}

function BaseAside ({ children }: AsideProps) {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Sticked>
          <TextField placeholder="Buscar no Twitter"/>
        </Styles.Sticked>
        {children}
      </Styles.Wrapper>
    </Styles.Container>
  )
}

export const Aside = memo(BaseAside)