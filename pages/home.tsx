import { NextLayoutComponentType } from 'next'
import { ReactElement } from 'react'

import { Header } from 'Layout/MainLayout/components'

import * as Styles from 'styles/Home'

import { MainLayout } from 'Layout'
import { ButtonIcon } from 'components'

const Home: NextLayoutComponentType = () => {
  return (
    <>
      <Header 
        title="Página inicial" 
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