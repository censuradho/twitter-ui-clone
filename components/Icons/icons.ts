import StarIcon from 'assets/star.svg'
import LogoIcon from 'assets/logo.svg'
import MessageIcon from 'assets/message.svg'
import NotificationIcon from 'assets/notification.svg'
import SearchIcon from 'assets/search.svg'
import HomeIcon from 'assets/home.svg'
import HorizontalDootsIcon from 'assets/horizontal-doots.svg'
import DialogIcon from 'assets/dialog.svg'
import RetweetIcon from 'assets/retweet.svg'
import HeartIcon from 'assets/heart.svg'
import ShareIcon from 'assets/shared.svg'

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
  horizontalDoots: HorizontalDootsIcon as SVGAElement,
  home: HomeIcon as SVGAElement,
  dialog: DialogIcon as SVGAElement,
  retweet: RetweetIcon as SVGAElement,
  heart: HeartIcon as SVGAElement,
  share: ShareIcon as SVGAElement,
}