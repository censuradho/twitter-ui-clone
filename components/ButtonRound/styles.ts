import styled, { DefaultTheme } from 'styled-components'

import { darken } from 'polished'


type Theme = keyof (Pick<DefaultTheme, 'buttonRound'>)['buttonRound']

export interface ButtonProps {
  size?: number
  fill?: string;
  variant?: Theme
  hoverActiveColor?: string
  iconHoverActiveColor?: string
}



export const Button = styled.button<ButtonProps>`
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, variant = 'base' }) => theme.buttonRound[variant].background};
  padding: .5rem;
  transition: .2s;
  
  svg {
    fill: ${({ fill }) => fill};
    
  }
  &:hover {
    background-color: ${({ theme, variant = 'base', hoverActiveColor }) => hoverActiveColor || theme.buttonRound[variant].hoverBackground};

    svg {
      fill: ${({ theme, variant = 'base', iconHoverActiveColor }) => iconHoverActiveColor  || theme.colors.body};
    }
  }

`