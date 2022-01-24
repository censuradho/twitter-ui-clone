import type { NextLayoutComponentType } from 'next'

import * as Styles from 'styles/index'

import { Button } from 'components'

const Home: NextLayoutComponentType = () => {
  return (
    <Styles.Main>
      <Styles.FormContainer>
        <h1>Acontecendo agora</h1>
        <h2>Inscreva-se no Twitter hoje mesmo.</h2>

        <Button fullWidth outline>Entrar</Button>
      </Styles.FormContainer>
    </Styles.Main>
  )
}

export default Home

