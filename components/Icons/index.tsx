import { ComponentProps, memo } from "react"

import { icons } from './icons'


interface IconsProps  {
  name: keyof typeof icons;
  size?: number;
  icon?: {
    fill?: string;
    width?: number;
    height?: number;
  }
}

function BaseIcons ({ name, size, icon }: IconsProps) {
  const Component = icons[name]

  return (
    <Component size={size || 24}  width={size || 24} height={size || 24} {...icon}  />
  )
}

export const Icons = memo(BaseIcons)