import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  margin-left: auto;
  @media (min-width: ${({ theme }) => theme.breakingPoints.small})  {
    flex-direction: row;
  }
`

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  overflow: auto;

  
  @media (min-width: ${({ theme }) => theme.breakingPoints.small}) {
    border-right: 1px solid ${({ theme }) => theme.colors.foreground};
    border-left: 1px solid ${({ theme }) => theme.colors.foreground};
  }
`