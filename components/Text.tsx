import classNames from 'classnames'
import React, { ElementType, HTMLAttributes } from 'react'

export const headline1 =
  'text-2xl md:text-3xl lg:text-4xl font-display font-semibold'
export const headline2 =
  'text-xl md:text-2xl lg:text-3xl leading-tight font-display font-semibold'
export const headline3 =
  'text-lg md:text-xl lg:text-2xl leading-tight font-display font-semibold'
export const headline4 =
  'text-lg md:text-xl lg:text-2xl leading-tight font-display font-light'
export const paragraph1 =
  'md:text-lg lg:text-xl leading-loose font-body font-light'
export const paragraph2 =
  'text-sm md:text-base lg:text-lg leading-4 md:leading-5 lg:leading-6 font-body font-light'
export const paragraph3 = 'text-xs md:text-sm lg:text-base font-body'
export const base = 'font-body'

export type TextProps = HTMLAttributes<Element> & {
  as?: ElementType
  theme?: string
}

const Text = ({
  className = '',
  children,
  as: Tag = 'span',
  theme = base,
}: TextProps) => {
  return <Tag className={classNames(className, theme)}>{children}</Tag>
}

export default Text
