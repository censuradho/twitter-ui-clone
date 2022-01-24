import type { NextLayoutComponentType } from 'next'

import Logo from 'assets/blue-logo.svg'
import BgImage from 'assets/lohp_1302x955.png'

import * as Styles from 'styles/index'
import { Flex } from 'styles/Flex'

import { Button } from 'components'

import { useTheme } from 'hooks'

const Home: NextLayoutComponentType = () => {
  const { colors } = useTheme()

  return (
    <Styles.Main>
      <Styles.FormContainer>
        <form>
          <Flex
            column
            gap={2}
          >
            <Logo fill={colors.primary} width={47} height={47} />

            <h1>Acontecendo agora</h1>
            <h2>Inscreva-se no Twitter hoje mesmo.</h2>
            <Flex
              column
              gap={1}
            >
              <Button fullWidth>Inscreva-se com o número de celular...</Button>
              <Styles.Policies>Ao se inscrever, você concorda com os <Styles.Link href="/">Termos de Serviço</Styles.Link> e a <Styles.Link href="/">Políticas de privacidade</Styles.Link>, incluindo o <Styles.Link href="/">Uso dos cookies</Styles.Link></Styles.Policies>
            </Flex>

          </Flex>

          <Flex
            column
            gap={1}
          >
            <Styles.Answer>Já tem uma conta?</Styles.Answer>
            <Button fullWidth outline>Entrar</Button>

          </Flex>
        </form>

      </Styles.FormContainer>
      <Styles.ImageContainer>
        <Styles.Img layout="fill" src={BgImage} />
        <Logo width={100} height={100} fill="#fff" />
      </Styles.ImageContainer>
    </Styles.Main>
  )
}

export default Home

