import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column-reverse;
  background: transparent;

  @media (min-width: 31.46rem) {
    flex-direction: row;
  }

 
`

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  overflow: auto;
`