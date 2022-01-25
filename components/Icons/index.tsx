import { ComponentProps, memo } from "react"

import { icons } from './icons'


interface IconsProps  {
  name: keyof typeof icons;
  icon?: {
    fill?: string;
    width?: number;
    height?: number
  }
}

function BaseIcons ({ name, icon }: IconsProps) {
  const Component = icons[name]

  return (
    <Component width={24} height={24} {...icon}  />
  )
}

export const Icons = memo(BaseIcons)