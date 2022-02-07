import styled from 'styled-components'

export const Container = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 1rem;
  height: 30rem;
  background: ${({ theme }) => theme.colors.foreground};
`

export const Title = styled.strong`
  font-size: 1.2rem;
`