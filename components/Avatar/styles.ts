import styled from 'styled-components'

import ImageNext from 'next/image'

export interface AvatarProps {
  size?: number
}

export const Container = styled.div<AvatarProps>`
  width: ${({ size = 3 }) => `${size}rem`};
  height: ${({ size = 3 }) => `${size}rem`};
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .2);
  overflow: hidden;
  
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
