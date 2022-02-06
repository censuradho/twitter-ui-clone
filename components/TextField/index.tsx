import { InputHTMLAttributes, memo } from "react"

import * as Styles from './styles'

type RootInputProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'placeholder' | 'name'>

interface TextFieldProps extends RootInputProps{
  
}

function BaseTextField (props: TextFieldProps) {
  return (
  <Styles.Container>
    <Styles.Input {...props}/>
  </Styles.Container>    
  )
}

export const TextField = memo(BaseTextField)
