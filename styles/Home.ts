import styled from 'styled-components'
import { Avatar as AvatarComponent } from 'components'

export const Main = styled.main`
`

export const Avatar = styled(AvatarComponent)`
  @media (min-width: ${({ theme }) => theme.breakingPoints.small}) {
    display: none;
  }
`
 