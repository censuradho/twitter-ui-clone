import styled from 'styled-components'

import LinkNext from 'next/link'
import Image from 'next/image'

export const FormContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  h1 {
    margin-top: 2.3rem;
    margin-bottom: 1.5rem;
    display: inline-block;
    white-space: wrap;
  }
  form {
    width: 100%;
    max-width: 35.5rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`

export const Answer = styled.span`
  font-size: 1rem;
  font-weight: 700;
`

export const Policies = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.body};

  a {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`

export const Link = styled(LinkNext)`
  font-size: 0.7rem;
`

export const Img = styled(Image)`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 23.43rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    position: absolute;
  }
  
`

export const Main = styled.main`
  width: 100%;

  @media (min-width: 62.5rem) {
    display: flex;
    flex-direction: row-reverse;

    ${FormContainer} {
      width: 70%;
    }
    ${ImageContainer} {
      flex: 1;
      min-height: 100vh;
    }
  }

  @media (min-width: 75rem) {
    display: flex;
    flex-direction: row-reverse;

    ${FormContainer} {
      width: 50%;
    }

    ${ImageContainer} {
      width: 50%
    }
  }
`