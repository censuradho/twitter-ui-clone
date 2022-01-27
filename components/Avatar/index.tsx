/* eslint-disable @next/next/no-img-element */
import { memo } from "react"

import * as Styles from './styles'

interface AvatarProps extends Styles.AvatarProps {
  src?: string
}

function BaseAvatar ({ src, size }: AvatarProps) {
  return (
    <Styles.Container size={size}>
      {src && <img src={src} alt="avatar" />}
    </Styles.Container>
  )
}

export const Avatar = memo(BaseAvatar)
