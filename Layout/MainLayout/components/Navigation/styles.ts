import styled from 'styled-components'

import LinkNext from 'next/link'

export const Container = styled.nav`
  width: 100%;
  height: 3.21rem;
  border-top: 1px solid ${({ theme }) => theme.colors.foreground};

  nav {
    height: 100%;
    width: 100%;
    display: flex;
  }
`
export const List = styled.ul`
  display: flex;
  height: 100%;
  flex: 1;
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

export const Link = styled(LinkNext)`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`