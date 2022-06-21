import React, { ElementType, ReactNode } from 'react'
import classNames from 'classnames'
import { css } from '@emotion/css'

interface ContainerProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

const Container = ({
  as: ElementType = 'div',
  className = '',
  children,
}: ContainerProps) => (
  <ElementType className={classNames(className, 'container mx-auto px-6', css`
                 max-width: 1323px;
                `,)}>
    {children}
  </ElementType>
)

export default Container
