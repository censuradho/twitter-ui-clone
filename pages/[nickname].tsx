import { useRouter } from "next/router"
import { GetStaticProps, NextLayoutComponentType, InferGetStaticPropsType, GetStaticPaths } from "next"
import { ReactElement } from "react"
import path from 'path'
import fs from 'fs'

import { MainLayout } from "Layout"
import { Header } from "Layout/MainLayout/components"

import { User } from "types/user"

import * as Styles from 'styles/Perfil'
import { Flex } from "styles/Flex"

const Perfil: NextLayoutComponentType<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {

  const router = useRouter()
  const { nickname } = router.query

  return (
    <Styles.Main>
      <Header title={(
        <Flex column>
          <Styles.HeaderNick>{data.username}</Styles.HeaderNick>
          <Styles.HeaderTweets>{`${data.tweets.length} Tweets`}</Styles.HeaderTweets>
        </Flex>
      )} />
      <h1>{nickname}</h1>
    </Styles.Main>
  )
}



export const getStaticProps: GetStaticProps<{ data: User}> = async (context) => {

  const dataDirectory = path.join(process.cwd(), 'data', 'users.json')

  const data = fs.readFileSync(dataDirectory, 'utf8')
  const json = JSON.parse(data) as User[]

  const user = json.find(value => value.nick === context?.params?.nickname) as User

  return {
    props: {
      data: user
    }
  }

}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const dataDirectory = path.join(process.cwd(), 'data', 'users.json')

  const data = fs.readFileSync(dataDirectory, 'utf8')
  const json = JSON.parse(data) as User[]

  const paths = json.map(value => ({ params: { nickname: value.nick }}))

  return {
    paths: paths,
    fallback: false // false or 'blocking'
  };
}

Perfil.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Perfil