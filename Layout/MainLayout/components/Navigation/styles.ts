import styled from 'styled-components'
import { defaultTheme } from 'theme/template/default'

type BreakPoint = keyof typeof defaultTheme['breakingPoints']

interface BreakPointViewProps {
  min?: BreakPoint
  max?: BreakPoint
  hidden?: boolean
}

export const BreakPointView = styled.div<BreakPointViewProps>`
  display: ${({ hidden }) => hidden ? 'none' : 'block'};
  
  @media (max-width: ${({ theme, max = 'mediumn' }) => theme.breakingPoints[max]}) {
    display: ${({ hidden, max }) => !hidden && !!max ? 'none' : 'auto'};
  };

  @media (min-width: ${({ theme, min = 'mediumn' }) => theme.breakingPoints[min]}) {
    display: ${({ hidden, min }) => !hidden && !!min ? 'none' : 'block'};;
  };
`

export const BreakPointItem = styled.li<BreakPointViewProps>`
  display: ${({ hidden }) => hidden ? 'none' : 'flex'};
  
  @media (max-width: ${({ theme, max = 'mediumn' }) => theme.breakingPoints[max]}) {
    display: ${({ hidden, max }) => !hidden && !!max ? 'none' : 'auto'};
  };

  @media (min-width: ${({ theme, min = 'mediumn' }) => theme.breakingPoints[min]}) {
    display: ${({ hidden, min }) => !hidden && !!min ? 'none' : 'flex'};;
  };
`

export const Container = styled.div`
  width: 100%;
  height: 3.21rem;
  border-top: 1px solid ${({ theme }) => theme.colors.foreground};
  /* background: tomato; */


  @media (min-width: ${({ theme }) => theme.breakingPoints.small}) {
    width: 100%;
    max-width: 7rem;
    height: 100%;
    border-top: none;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.mediumn}) {
    display: flex;
    justify-content: flex-end;
    max-width: 25%;
    margin-left: auto;

  }
`

export const List = styled.ul`
  display: flex;
  height: 100%;
  flex: 1;
  /* background: #2EB086; */

  @media (min-width: ${({ theme }) => theme.breakingPoints.small}) {
    height: auto;
    gap: 1.2rem;
    flex-direction: column;
  }
`

export const Item = styled(BreakPointItem)<{ isActive?: boolean }>`
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

export const IconContainer = styled.div`
  padding: .4rem;
  border-radius: 50%;
  &:hover {
    background: ${({ theme }) => theme.colors.hover}
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.mediumn}) {
    &:hover {
      background: none
    }
  }


`
export const Link = styled.a`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  cursor: pointer;
  gap: 1rem;

  span {
    display: none;
    font-size: 1.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.mediumn}) {
  justify-content: flex-start;

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

  @media (min-width: ${({ theme }) => theme.breakingPoints.small}) {
    max-width: max-content;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    
    padding:  1rem;

    nav {
      flex: 1;
      margin: 1.4rem 0;
    }

  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.mediumn}) {
    max-width: 16.8rem;
    align-items: flex-start;
    margin: 0;
  }
`
