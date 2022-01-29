import { memo, ReactNode } from "react"

import { useRouter } from 'next/router';

import { ButtonIcon } from "components"

import * as Styles from './styles'

interface HeaderProps {
  title: ReactNode
  right?: ReactNode | string
  left?: ReactNode | string
}

function BaseHeader ({ title, right, left }: HeaderProps) {
  const { back } = useRouter()

  return (
    <Styles.Container>
      <Styles.Left>{left || <ButtonIcon name="arrowBack" onClick={() => back()} />}</Styles.Left>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Right>{right}</Styles.Right>
    </Styles.Container>
  )
}

export const Header = memo(BaseHeader)
