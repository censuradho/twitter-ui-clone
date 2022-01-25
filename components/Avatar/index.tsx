import { memo } from "react"

import * as Styles from './styles'

interface AvatarProps extends Styles.AvatarProps {
  src?: string
}

function BaseAvatar ({ src, size }: AvatarProps) {
  return (
    <Styles.Container size={size}>
      {src && <Styles.Image src={src} layout="fill" />}
    </Styles.Container>
  )
}

export const Avatar = memo(BaseAvatar)
