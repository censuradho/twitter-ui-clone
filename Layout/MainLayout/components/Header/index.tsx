import { memo, ReactNode } from "react"

import * as Styles from './styles'

interface HeaderProps {
  title: string
  right?: ReactNode | string
}

function BaseHeader ({ title, right }: HeaderProps) {
  return (
    <Styles.Container>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Right>{right}</Styles.Right>
    </Styles.Container>
  )
}

export const Header = memo(BaseHeader)
