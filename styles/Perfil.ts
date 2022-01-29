import styled from 'styled-components'
import ImageNext from 'next/image'

import { Avatar } from 'components'

export const Main = styled.main`
`

export const HeaderNick = styled.strong`
  font-size: 1rem;

`

export const HeaderTweets = styled.span`
  color: ${({ theme }) => theme.colors.body};
  font-size: .8rem;
  font-weight: 500;
`



export const BannerImageSmall = styled(ImageNext)``
export const BannerImageLarge = styled(ImageNext)``


export const BannerContainer = styled.div`
  width: 100%;
  height: 9rem;
  position: relative;

  ${BannerImageLarge} {
    display: none;
  }

  @media (min-width: 500px) {
    height: 22rem;

    ${BannerImageLarge} {
      display: block;
    }
    
    ${BannerImageSmall} {
      display: none;
    }
  }
`

export const AvatarSmall = styled(Avatar)``
export const AvatarLarge = styled(Avatar)``

export const AvatarContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  position: relative;
  bottom: 2rem;
  z-index: 1;
  padding: .1rem;
  background: ${({ theme }) => theme.colors.background};


  ${AvatarLarge} {
    display: none;
  }

  @media (min-width: 500px) {
    width: 9rem;
    height: 9rem;
    padding: .3rem;
    
    ${AvatarLarge} {
      display: block;
    }
    
    ${AvatarSmall} {
      display: none;
    }
  }


`

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
`

export const Bio = styled(Container)`

`

export const BioUsername = styled.strong`
  font-size: 1.3rem;
`

export const BioNickname = styled.span`
  font-size: .9rem;
  color: ${({ theme }) => theme.colors.body};
`

export const BioDescription = styled.p`
  font-size: .9rem;
  display: inline-block;
  margin-top: 1.2rem;
`

export const BioLocation = styled.span`
  font-size: .9rem;
  color: ${({ theme }) => theme.colors.body};
  display: inline-flex;
  align-items: center;
  gap: .5rem;

  svg {
    fill: ${({ theme }) => theme.colors.body};
  }
`

export const BioCreatedAt = styled(BioLocation)`
  
`

export const FollowersAmount = styled.strong`

`

export const FollowersLabel = styled(BioLocation)`
  
`

export const FollowingAmount = styled(FollowersAmount)``

export const FollowingLabel = styled(FollowersLabel)``
