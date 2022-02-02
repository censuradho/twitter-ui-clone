import styled from 'styled-components'
import { defaultTheme } from 'theme/template'

export interface ButtonProps {
  variant?: keyof typeof defaultTheme['buttons'];
  outline?: boolean;
  fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 1rem 0.75rem;
  font-size: 1rem;
  background: ${({ theme, variant = 'primary', outline }) => 
    outline 
      ? theme.buttons[variant].outline.background
      : theme.buttons[variant].background};
  border: ${({ theme, variant = 'primary', outline }) => 
    outline 
    ? `solid ${theme.buttons[variant].outline.border}` 
    : theme.buttons[variant].border};

  border-color: ${({ theme, variant = 'primary', outline }) => 
      outline 
      ? theme.buttons[variant].outline.borderColor 
      : theme.buttons[variant].borderColor};

  font-weight: ${({ theme, variant = 'primary', outline }) => 
        outline 
        ? theme.buttons[variant].outline.fontWeight 
        : theme.buttons[variant].fontWeight};

  color: ${({ theme, variant = 'primary', outline }) => 
          outline 
          ? theme.buttons[variant].outline.color 
          : theme.buttons[variant].color};

  transition-duration: 0.2s;

  border-radius: 30px;

  min-width: 10.6250rem;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};

  &:hover {
    background: ${({ theme, variant = 'primary', outline }) => 
    outline 
      ? theme.buttons[variant].outline.hoverBackground 
      : theme.buttons[variant].hoverBackground};
  }
}
`