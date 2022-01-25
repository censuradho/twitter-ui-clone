import { ButtonHTMLAttributes, memo, ReactNode } from "react";

import * as Styles from './styles'

type RootButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onFocus' | 'onBlur'>

interface ButtonRoundProps extends Styles.ButtonProps, RootButtonProps {
  children: ReactNode
}

function BaseButtonRound ({ children, ...props }: ButtonRoundProps) {
  return (
    <Styles.Button {...props}>{children}</Styles.Button>
  )
}

export const ButtonRound = memo(BaseButtonRound)