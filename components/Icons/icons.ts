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
import ScheduleIcon from 'assets/schedule.svg'
import LocationIcon from 'assets/location.svg'
import HashtagIcon from 'assets/hashtag.svg'
import NewTweethtagIcon from 'assets/new-tweet.svg'
import PerfilIcon from 'assets/perfil.svg'
import ListIcon from 'assets/list.svg'
import MarkIcon from 'assets/mark.svg'
import MoreIcon from 'assets/more.svg'

import { MdArrowBack } from 'react-icons/md'

import { FunctionComponent, SVGProps } from 'react'

export type SVGPropsComponent = FunctionComponent<SVGProps<SVGElement>>

export const icons = {
  star: StarIcon as SVGPropsComponent,
  logo: LogoIcon as SVGPropsComponent,
  arrowBack: MdArrowBack,
  message: MessageIcon as SVGPropsComponent,
  notification: NotificationIcon as SVGPropsComponent,
  search: SearchIcon as SVGPropsComponent,
  horizontalDoots: HorizontalDootsIcon as SVGPropsComponent,
  home: HomeIcon as SVGPropsComponent,
  dialog: DialogIcon as SVGPropsComponent,
  retweet: RetweetIcon as SVGPropsComponent,
  heart: HeartIcon as SVGPropsComponent,
  share: ShareIcon as SVGPropsComponent,
  schedule: ScheduleIcon as SVGPropsComponent,
  location: LocationIcon as SVGPropsComponent,
  hashtag: HashtagIcon as SVGPropsComponent,
  newTweet: NewTweethtagIcon as SVGPropsComponent,
  perfil: PerfilIcon as SVGPropsComponent,
  list: ListIcon as SVGPropsComponent,
  mark: MarkIcon as SVGPropsComponent,
  more: MoreIcon as SVGPropsComponent,
}