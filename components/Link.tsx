/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode } from 'react'
import NextLink from 'next/link'
import { ButtonThemeOptions, useButtonTheme } from '../helpers/hooks'

export interface LinkProps extends ButtonThemeOptions {
  href: string
  children: ReactNode
}

const Link = ({ href, children, ...themeOptions }: LinkProps) => {
  const className = useButtonTheme(themeOptions)
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}

export default Link
