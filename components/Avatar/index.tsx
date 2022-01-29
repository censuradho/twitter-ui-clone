/* eslint-disable @next/next/no-img-element */
import { memo } from "react"

import * as Styles from './styles'

interface AvatarProps extends Styles.AvatarProps {
  src?: string
}

function BaseAvatar ({ src, ...props }: AvatarProps) {
  return (
    <Styles.Container {...props}>
      {src && <img src={src} alt="avatar" />}
    </Styles.Container>
  )
}

export const Avatar = memo(BaseAvatar)
