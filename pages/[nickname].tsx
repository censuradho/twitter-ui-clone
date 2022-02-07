import { useRouter } from "next/router"
import { GetStaticProps, NextLayoutComponentType, InferGetStaticPropsType, GetStaticPaths } from "next"
import { ReactElement } from "react"
import ImageNext from 'next/image'
import { format } from 'date-fns'

import path from 'path'
import fs from 'fs'

import { MainLayout } from "Layout"
import { Aside, Header } from "Layout/MainLayout/components"

import { User } from "types/user"

import * as Styles from 'styles/Perfil'
import { Flex } from "styles/Flex"
import { Avatar, Icons } from "components"
import { ReactGA } from "provider/ReactGA"

const Perfil: NextLayoutComponentType<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {

  const router = useRouter()
  const { nickname } = router.query

  return (
    <ReactGA>
      <Styles.Main>
        <Header title={(
          <Flex column>
            <Styles.HeaderNick>{data.username}</Styles.HeaderNick>
            <Styles.HeaderTweets>{`${data.tweets.length} Tweets`}</Styles.HeaderTweets>
          </Flex>
        )} />
        <Styles.BannerContainer>
          {data.banner_url && (
            <>
              <Styles.BannerImageSmall objectFit="cover" src={data.banner_url.small} layout="fill" alt="" />
              <Styles.BannerImageLarge objectFit="cover" src={data.banner_url.large} layout="fill" alt="" />
            </>
          )}
        </Styles.BannerContainer>
        <Styles.Container>
          <Flex>
            <Styles.AvatarContainer>
              <Styles.AvatarSmall fill src={data.avatar_url.small} />
              <Styles.AvatarLarge fill src={data.avatar_url.large} />
            </Styles.AvatarContainer>
          </Flex>
        </Styles.Container>
        <Styles.Bio>
          <Flex column gap={1}>

            <Flex column>
              <Styles.BioUsername>{data.username}</Styles.BioUsername>
              <Styles.BioNickname>{`@${data.nick}`}</Styles.BioNickname>
            </Flex>
            <Styles.BioDescription>{data.description}</Styles.BioDescription>
            
            <Flex gap={1}>
              <Styles.BioLocation><Icons name="location" /> {`${data.location.city}, ${data.location.Country}`}</Styles.BioLocation>
              <Styles.BioCreatedAt><Icons name="schedule" /> {format(new Date(data.created_at), 'dd-MM-yyyy')}</Styles.BioCreatedAt>
            </Flex>

          <Flex gap={1}>
            <Flex gap={.4}>
              <Styles.FollowersAmount>{data.followers}</Styles.FollowersAmount>
              <Styles.FollowersLabel>Seguindo</Styles.FollowersLabel>
            </Flex>
            <Flex gap={.4}>
              <Styles.FollowingAmount>{data.following}</Styles.FollowingAmount>
              <Styles.FollowingLabel>Seguindo</Styles.FollowingLabel>
            </Flex>
          </Flex>
          </Flex>

        </Styles.Bio>
      </Styles.Main>
    </ReactGA>
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
      <Aside>
        <h1>.</h1>
      </Aside>
    </MainLayout>
  )
}

export default Perfil