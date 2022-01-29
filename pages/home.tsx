import { ReactElement } from 'react'
import { GetStaticProps, NextLayoutComponentType } from 'next'
import LinkNext from 'next/link'
import { useSelector } from 'react-redux'


import { Header } from 'Layout/MainLayout/components'

import * as Styles from 'styles/Home'

import { MainLayout } from 'Layout'

import { Avatar, ButtonIcon, TweetCard  } from 'components'
import { routePaths } from 'constants/routes'
import { useRouter } from 'next/router'

const users = [
  {
    username: 'Beca Maia',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1433095560878243844/X3LmnTXW_x96.jpg',
    nick: {
      href: '#',
      label: 'rebecamaia_R'
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
    username: 'Beca Maia',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1433095560878243844/X3LmnTXW_x96.jpg',
    nick: {
      href: '#',
      label: 'rebecamaia_R'
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
    username: 'Letícia Cavalcanti',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1480329110723481600/UnngW0gl_400x400.jpg',
    nick: {
      href: '#',
      label: 'l3llys'
    }
  },
  {
    username: 'Letícia Cavalcanti',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1480329110723481600/UnngW0gl_400x400.jpg',
    nick: {
      href: '#',
      label: 'l3llys'
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
    username: 'Beca Maia',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1433095560878243844/X3LmnTXW_x96.jpg',
    nick: {
      href: '#',
      label: 'rebecamaia_R'
    }
  },
  {
    username: 'Letícia Cavalcanti',
    created_at: '',
    perfil_link: '#',
    avatart_url: 'https://pbs.twimg.com/profile_images/1480329110723481600/UnngW0gl_400x400.jpg',
    nick: {
      href: '#',
      label: 'l3llys'
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
  }
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
    <Styles.Main>
      <Header 
        title={<LinkNext href={routePaths.home}><a>Página inicial</a></LinkNext>} 
        left={<Avatar size={2.5} src={user?.avatar_url} /> }
        right={<ButtonIcon size={2.3} name="star" />} 
      />
      {renderUsers}
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