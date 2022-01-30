import { darken } from "polished"

import { colors } from "./colors"

export const buttonRound = {
  base: {
    background: 'none',
    hoverBackground: darken(.1, colors.hover),
  }
}