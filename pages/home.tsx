import { ReactElement } from 'react'
import { NextLayoutComponentType } from 'next'
import { useSelector } from 'react-redux'

import { Header } from 'Layout/MainLayout/components'

import * as Styles from 'styles/Home'

import { MainLayout } from 'Layout'

import { Avatar, ButtonIcon, TwittCard } from 'components'

const Home: NextLayoutComponentType = () => {
  const user = useSelector(value => value.user)

  return (
    <Styles.Main>
      <Header 
        title="Página inicial" 
        left={<Avatar size={2.5} src={user?.avatar_url} /> }
        right={<ButtonIcon size={2.3} name="star" />} 
      />
      <TwittCard />
      <TwittCard />
      <TwittCard />
      <TwittCard />
      <TwittCard />
      <TwittCard />
      <TwittCard />
      <TwittCard />
      <TwittCard />
    </Styles.Main>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Home