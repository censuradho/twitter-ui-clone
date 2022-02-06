import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Input = styled.input`
  padding: 0 1.5rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.foreground};
  border-radius: 2rem;
  outline: none;
  width: 100%;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.body};
    font-size: 1rem;
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
  }
`