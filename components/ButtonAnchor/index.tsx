import { ComponentProps, memo, ReactNode } from "react"
import LinkNext from 'next/link'

import * as Styles from './styles'

type LinkNextProps = Pick<ComponentProps<typeof LinkNext>, 'href'>

interface ButtonAnchor extends Styles.LinkProps, LinkNextProps {
  children: ReactNode
}

function BaseButtonAnchor ({ children, variant, outline, fullWidth, ...props }: ButtonAnchor) {
  return (
    <Styles.Link 
      variant={variant} 
      outline={outline}
      fullWidth={fullWidth}
    >
      <LinkNext  {...props}>
        {children}
      
      </LinkNext>
    </Styles.Link>
  )
}

export const ButtonAnchor = memo(BaseButtonAnchor)