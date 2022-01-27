import styled from 'styled-components'
import LinkNext from 'next/link'

export const Article = styled.article`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.foreground};
  padding:  .5rem 1rem;

  display: flex;
  align-items: flex-start;
  gap: 1rem;
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
export const Username = styled.strong`
  font-size: inherit;
  color: ${({ theme }) => theme.colors.color};
  font-weight: 800;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  svg {
    fill: ${({ theme }) => theme.colors.body};
  }
`