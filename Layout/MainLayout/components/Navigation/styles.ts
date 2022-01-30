import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 3.21rem;
  border-top: 1px solid ${({ theme }) => theme.colors.foreground};
  background: tomato;


  @media (min-width: ${({ theme }) => theme.breakingPoints.small}) {
    width: 100%;
    max-width: 7rem;
    height: 100%;
    border-right: 1px solid ${({ theme }) => theme.colors.foreground};
    border-top: none;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.mediumn}) {
    display: flex;
    justify-content: flex-end;
    max-width: 25%
  }
`

export const List = styled.ul`
  display: flex;
  height: 100%;
  flex: 1;
  background: #2EB086;

  @media (min-width: ${({ theme }) => theme.breakingPoints.small}) {
    height: auto;
    gap: 1.2rem;
    flex-direction: column;
  }
`

export const Item = styled.li<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: ${({ isActive, theme }) => isActive ? theme.link.active.fill : theme.link.inactive.fill} !important;
    stroke: ${({ isActive, theme }) => isActive ? theme.link.active.stroke : theme.link.inactive.stroke};
  }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  span {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.mediumn}) {
    span {
      display: block;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  
  nav {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.mediumn}) {
    max-width: max-content;
    padding: 0 1rem;
  }
`
