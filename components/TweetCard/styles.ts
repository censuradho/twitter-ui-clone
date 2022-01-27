import styled from 'styled-components'
import LinkNext from 'next/link'

export const Article = styled.article`
  width: 100%;
  min-height: 7rem;
  border: 1px solid ${({ theme }) => theme.colors.foreground};
  padding:  .5rem 1rem;

  display: flex;
  align-items: flex-start;
  gap: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.foreground};
    cursor: pointer;
  }
`

export const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Arrow = styled.div`
  width: 2px;
  height: 100%;
  background: ${({ theme }) => theme.colors.body};
`

export const Header = styled.div`
  font-size: 0.88rem;
  flex: 1;
  color: ${({ theme }) => theme.colors.body};
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    fill: ${({ theme }) => theme.colors.body};
  }
`

export const Ref = styled(LinkNext)`
  color: inherit;
`
export const CreateAt = styled.span`
  font-size: inherit;
  color: inherit;
`
export const Username = styled.a`
    font-size: inherit;
    color: ${({ theme }) => theme.colors.color};
    font-weight: 700;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Body = styled.div`
  height: 4rem;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  button:nth-child(1):hover {
    /* svg {
    fill: ${({ theme }) => theme.colors.primary};
    } */
  }

  svg {
    fill: ${({ theme }) => theme.colors.body};
  }

`

