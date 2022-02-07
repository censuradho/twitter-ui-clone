import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 7rem;
  padding: .2rem 1.5rem;
  display: none;
  height: 100%;
  overflow: auto;
  position: sticky;
  top: 0;

  @media (min-width: ${({ theme }) => theme.breakingPoints.mediumn}) {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.breakingPoints.large}) {
    max-width: 32rem;
  }

  /* width */
::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 75%;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakingPoints.large}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const Sticked = styled.div`
  position: sticky;
  top: 0;
`

export const SearchBarContainer = styled.div`
  padding-bottom: .5rem;
  background: ${({ theme }) => theme.colors.background};
`

