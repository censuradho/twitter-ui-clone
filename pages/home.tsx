import { NextLayoutComponentType } from 'next'
import { ReactElement } from 'react'

import { Header } from 'Layout/MainLayout/components'

import * as Styles from 'styles/Home'

import { MainLayout } from 'Layout'
import { Avatar, ButtonIcon } from 'components'
import { useSelector } from 'react-redux'

const Home: NextLayoutComponentType = () => {
  const user = useSelector(value => value.user)

  return (
    <>
      <Header 
        title="Página inicial" 
        left={<Avatar size={2.5} src={user?.avatar_url} /> }
        right={<ButtonIcon size={2.3} name="star" />} 
      />
      <Styles.Main>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
        <h1>home</h1>
      </Styles.Main>
    </>
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