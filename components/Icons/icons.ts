import StarIcon from 'assets/star.svg'
import LogoIcon from 'assets/logo.svg'

import {  ComponentType, FunctionComponent, SVGProps } from 'react'

export type SVGPropsComponent = FunctionComponent<SVGProps<SVGElement>>

export const icons = {
  star: StarIcon as SVGPropsComponent,
  logo: LogoIcon as SVGPropsComponent
}