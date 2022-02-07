import { memo } from 'react'

import * as Styles from './styles'

function BaseWhatsHappening () {
  return (
    <Styles.Container>
      <Styles.Title>O que está acontecendo</Styles.Title>
    </Styles.Container>
  )
}

export const WhatsHappening = memo(BaseWhatsHappening)