import { ReactElement } from 'react'
import { NextLayoutComponentType } from 'next'
import LinkNext from 'next/link'
import { useSelector } from 'react-redux'

import * as Styles from 'styles/Home'

import { MainLayout } from 'Layout'

import { ButtonIcon, Head, TweetCard  } from 'components'
import { Header, Aside } from 'Layout/MainLayout/components'
import { WhatsHappening, WhoFollow } from 'components/pages/home'

import { routePaths } from 'constants/routes'
import { ReactGA } from 'provider/ReactGA'

const users = [
  {
    username: 'Valdi Dalla Rosa',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1415138633993146370/uXMaQOcZ_400x400.jpg',
    nick: {
      href: '#',
      label: 'ValdiDallaRosa'
    }
  },
  {
    username: 'Gustavo Leite',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1252288987265449985/g4EiqYMM_bigger.jpg',
    nick: {
      href: '#',
      label: 'Censuradho'
    }
  },
  {
    username: 'Too Lazy to Raise Hell',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1483877994481557506/dEL8UxU2_bigger.jpg',
    nick: {
      href: '#',
      label: 'Juh__Rs'
    }
  },
  {
    username: 'Valdi Dalla Rosa',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1415138633993146370/uXMaQOcZ_400x400.jpg',
    nick: {
      href: '#',
      label: 'ValdiDallaRosa'
    }
  },
  {
    username: 'Gustavo Leite',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1252288987265449985/g4EiqYMM_bigger.jpg',
    nick: {
      href: '#',
      label: 'Censuradho'
    }
  },
  {
    username: 'Too Lazy to Raise Hell',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1483877994481557506/dEL8UxU2_bigger.jpg',
    nick: {
      href: '#',
      label: 'Juh__Rs'
    }
  },
  {
    username: 'Valdi Dalla Rosa',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1415138633993146370/uXMaQOcZ_400x400.jpg',
    nick: {
      href: '#',
      label: 'ValdiDallaRosa'
    }
  },
  {
    username: 'Too Lazy to Raise Hell',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1483877994481557506/dEL8UxU2_bigger.jpg',
    nick: {
      href: '#',
      label: 'Juh__Rs'
    }
  },
]

const Home: NextLayoutComponentType = () => {
  const user = useSelector(value => value.user)

  const renderUsers = users.map((value, index) => (
    <TweetCard 
      key={index}
      perfil_link={value.nick.label}
      avatar_url={value.avatart_url}
      username={value.username}
      created_at={value.created_at}
      nick={{
        href: value.nick.href,
        label: value.nick.label
     }}   
    />
  ))

  return (
    <ReactGA>
      <Head description="O que h?? de novo no twitter" title="P??gina inicial" />
      <Styles.Main> 
        <Header 
          title={<LinkNext href={routePaths.home}><a>P??gina inicial</a></LinkNext>} 
          left={<Styles.Avatar size={2.5} src={user?.avatar_url} /> }
          right={<ButtonIcon size={2.3} name="star" />} 
        />
        {renderUsers}
      </Styles.Main>
    </ReactGA>

  )
}

Home.getLayout = (page: ReactElement) => {
  return (
      <MainLayout>
        {page}
        <Aside>
          <WhatsHappening />
          <WhoFollow />
        </Aside>
      </MainLayout>
  )
}



export default Home