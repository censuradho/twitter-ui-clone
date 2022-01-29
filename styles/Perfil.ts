import styled from 'styled-components'

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

export const BannerContainer = styled.div`
  width: 100%;
  height: 9rem;
  position: relative;
`

export const AvatarContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  position: relative;
  bottom: 2rem;
  z-index: 1;
  padding: .1rem;
  background: ${({ theme }) => theme.colors.background};
`

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
`

