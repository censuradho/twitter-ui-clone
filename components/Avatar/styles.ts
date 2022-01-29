import styled from 'styled-components'

import ImageNext from 'next/image'

export interface AvatarProps {
  size?: number | string;
  fill?: boolean
}

export const Container = styled.div<AvatarProps>`
  width: ${({ size = 3, fill }) => fill ? '100%' : `${size}rem`};
  height: ${({ size = 3, fill }) => fill ? '100%' : `${size}rem`};
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .2);
  overflow: hidden;
  position: relative;
  
  &:hover {
    filter: brightness(.8)
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const Image = styled(ImageNext)`
  width: 100%;
  object-fit: cover;
  object-position: center;
`
