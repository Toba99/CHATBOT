import React, { FocusEvent, MouseEvent, ReactNode } from 'react'
import { ButtonThemeOptions, useButtonTheme } from '../helpers/hooks'
import classNames from 'classnames'

export interface ButtonProps extends ButtonThemeOptions {
  children: ReactNode
  onClick?: (event: MouseEvent) => void
  onBlur?: (event: FocusEvent) => void
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}

const Button = ({
  onClick = () => {},
  onBlur = () => {},
  children,
  type = 'button',
  loading = false,
  ...themeOptions
}: ButtonProps) => {
  const className = useButtonTheme(themeOptions)
  return (
    <button
      type={type}
      className={classNames(
        className,
        'disabled:opacity-50 disabled:cursor-not-allowed',
      )}
      onClick={onClick}
      onBlur={onBlur}
      disabled={loading}
    >
      {loading ? 'Please wait...' : children}
    </button>
  )
}

export default Button
