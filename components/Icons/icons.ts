import StarIcon from 'assets/star.svg'
import LogoIcon from 'assets/logo.svg'
import MessageIcon from 'assets/message.svg'
import NotificationIcon from 'assets/notification.svg'
import SearchIcon from 'assets/search.svg'
import HomeIcon from 'assets/home.svg'

import { MdArrowBack } from 'react-icons/md'

import { FunctionComponent, SVGProps } from 'react'

export type SVGPropsComponent = FunctionComponent<SVGProps<SVGElement>>

export const icons = {
  star: StarIcon as SVGPropsComponent,
  logo: LogoIcon as SVGPropsComponent,
  arrowBack: MdArrowBack,
  message: MessageIcon as SVGAElement,
  notification: NotificationIcon as SVGAElement,
  search: SearchIcon as SVGAElement,
  home: HomeIcon as SVGAElement
}