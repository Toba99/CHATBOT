import classNames from 'classnames'
import { useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'
import screens from '../screens.json'

export interface ButtonThemeOptions {
  size?: 'sm' | 'md' | 'lg'
  kind?: 'primary' | 'secondary' | 'link'
  invert?: boolean
  className?: string
}
export const useResponsive = () => {
  const sm = useMediaQuery({ query: `(min-width: ${screens.sm})` })
  const md = useMediaQuery({ query: `(min-width: ${screens.md})` })
  const lg = useMediaQuery({ query: `(min-width: ${screens.lg})` })
  const xl = useMediaQuery({ query: `(min-width: ${screens.xl})` })
  return useMemo(
    () => ({
      sm,
      md,
      lg,
      xl,
    }),
    [sm, md, lg, xl],
  )
}
export const useButtonTheme = (themeOptions?: ButtonThemeOptions): string => {
  const {
    size = 'md',
    kind = 'primary',
    className: prevClassName = '',
    invert = false,
  } = themeOptions || {}
  return useMemo(
    () =>
      classNames(
        prevClassName,
        'block font-display whitespace-no-wrap rounded-full',
        {
          'py-3 px-8': size === 'lg',
          'py-2 px-6': size === 'md',
          'py-1 px-2': size === 'sm',
        },
        invert
          ? {
              'text-custom-blue bg-white': kind === 'primary',
              'border text-white border-white': kind === 'secondary',
              'text-white': kind === 'link',
            }
          : {
              'bg-custom-blue text-white shadow': kind === 'primary',
              'border border-custom-blue text-custom-blue shadow':
                kind === 'secondary',
              'text-custom-blue': kind === 'link',
            },
      ),
    [invert, kind, prevClassName, size],
  )
}
