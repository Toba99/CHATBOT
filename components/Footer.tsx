import React, { useMemo } from 'react'
import classNames from 'classnames'
import Container from './Container'
import { css } from '@emotion/css'
import Icon from './Icon'
import Text from './Text'

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), [])
  return (
    <footer>
      <div className={classNames(
        ``,
        css`
                  background: rgba(164, 179, 203, 0.08);
                `,
      )}>
        <Container className="flex justify-center py-4">
          <Text className="text-sm md:text-base text-gray-500">
            © Copyright {currentYear} Julia LTD.
          </Text>
          <Text className="text-sm md:text-base text-gray-500">
            All Rights Reserved.
          </Text>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
