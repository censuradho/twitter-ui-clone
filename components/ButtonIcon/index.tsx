import { ComponentProps, memo } from 'react'

import { ButtonRound, Icons } from 'components'

type IconProps = ComponentProps<typeof Icons>
type ButtonRoundProps = Omit<ComponentProps<typeof ButtonRound>, 'children'>

interface ButtonIconProps extends IconProps, ButtonRoundProps {

}
function BaseButtonIcon ({ name, icon, ...props }: ButtonIconProps) {
  return (
    <ButtonRound {...props}>
      <Icons name={name} {...icon} />
    </ButtonRound>
  )
}

export const ButtonIcon = memo(BaseButtonIcon)