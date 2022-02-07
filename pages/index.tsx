import type { NextLayoutComponentType } from 'next'

import Logo from 'assets/blue-logo.svg'
import BgImage from 'assets/lohp_1302x955.png'

import * as Styles from 'styles/index'
import { Flex } from 'styles/Flex'

import { ButtonAnchor, Head } from 'components'

import { useTheme } from 'hooks'
import { routePaths } from 'constants/routes'
import { ReactGA } from 'provider/ReactGA'

const Welcome: NextLayoutComponentType = () => {
  const { colors } = useTheme()

  return (
    <ReactGA>
      <Head description="Twitter. É o que está acontecendo / Twitter" title="Sign In" />
      <Styles.Main>
        <Styles.SectionContainer>
          <section>
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
                <ButtonAnchor href="/" fullWidth>Inscreva-se com o número de celular...</ButtonAnchor>
                <Styles.Policies>Ao se inscrever, você concorda com os <Styles.Link href="/">Termos de Serviço</Styles.Link> e a <Styles.Link href="/">Políticas de privacidade</Styles.Link>, incluindo o <Styles.Link href="/">Uso dos cookies</Styles.Link></Styles.Policies>
              </Flex>

            </Flex>

            <Flex
              column
              gap={1}
            >
              <Styles.Answer>Já tem uma conta?</Styles.Answer>
              <ButtonAnchor href={routePaths.home} fullWidth outline>Entrar</ButtonAnchor>

            </Flex>
          </section>

        </Styles.SectionContainer>
        <Styles.ImageContainer>
          <Styles.Img layout="fill" src={BgImage} />
          <Logo width={250} height={250} fill="#fff" />
        </Styles.ImageContainer>
      </Styles.Main>
    </ReactGA>
  )
}

export default Welcome

