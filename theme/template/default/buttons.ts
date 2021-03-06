import { colors } from "./colors";
import { darken } from 'polished'

export const buttons = {
  primary: {
    border: 'none',
    borderColor: 'none',
    background: colors.primary,
    color: colors.white,
    fontWeight: '600',
    hoverBackground: darken(.15, colors.primary),

    outline: {
      border: '1px',
      borderColor: colors.foreground600,
      background: 'none',
      color: colors.primary,
      fontWeight: '600',
      hoverBackground: 'rgba(29, 155, 240, 0.1)'
    }
  },
}