import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 7rem;
  padding: .2rem 1.5rem;
  display: none;
  height: 100%;
  position: sticky;
  top: 0;

  @media (min-width: ${({ theme }) => theme.breakingPoints.mediumn}) {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.large}) {
    max-width: 32rem;
  }

`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 75%;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakingPoints.large}) {
    display: block;
  }
`

export const Sticked = styled.div`
  position: sticky;
  top: 0;
`

