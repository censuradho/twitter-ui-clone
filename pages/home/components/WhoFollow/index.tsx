import { memo } from 'react'

import * as Styles from './styles'

function BaseWhoFollow () {
  return (
    <Styles.Container>
      <Styles.Title>Quem seguir</Styles.Title>
    </Styles.Container>
  )
}

export const WhoFollow = memo(BaseWhoFollow)