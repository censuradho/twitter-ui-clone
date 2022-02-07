import styled from 'styled-components'

export const Container = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 1rem;
  height: 10rem;
  background: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 2rem;
`

export const Title = styled.strong`
  font-size: 1.2rem;
`