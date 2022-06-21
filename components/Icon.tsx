import { cx, css } from '@emotion/css'
import React from 'react'

export type IconProps = {
  className?: string
  size?: number
  name: string
  color?: string
}

const Icon = ({
  className = '',
  size = 16,
  name,
  color = 'white',
}: IconProps) => (
  <i
    className={cx(
      'fa',
      `fa-${name}`,
      className,
      css`
        font-size: ${size}px;
        color: ${color};
      `,
    )}
  />
)

export default Icon
