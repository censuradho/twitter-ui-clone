import { memo } from "react";

import * as Styles from './styles'

function BaseNavigation () {
  return (
    <Styles.Container></Styles.Container>
  )
}

export const Navigation = memo(BaseNavigation)