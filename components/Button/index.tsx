import { memo } from "react"

import * as Styles from './styles'

interface ButtonProps extends Styles.ButtonProps {
  children: string
}

function BaseButton ({ children, ...props }: ButtonProps) {
  return (
    <Styles.Button {...props}>{children}</Styles.Button>
  )
}

export const Button = memo(BaseButton)