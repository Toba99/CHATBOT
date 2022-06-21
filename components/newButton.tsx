import React from 'react'
import classNames from 'classnames'
import { css } from '@emotion/css'
import Text from './Text'
import { useAppDispatch } from '../hooks/hooks'
import { selectSize } from '../store/reducers/cart'

const ProductSize = (props) => {
  const dispatch = useAppDispatch()
  return (
    <button onClick={() => dispatch(selectSize())} className={classNames(
      'mx-1 flex lg:ml-6 hover:bg-green-400 rounded-b-r-lg justify-center',
      css`
       width: 80px;
       background: ${props.color};
       border-radius: 90px 90px 90px 90px;
      `,
    )}>
      <Text
        as="h3"
        className=" mx-1 font-display font-semibold text-white capitalize"
      >
        {props.name}
      </Text>
    </button>
  )
}

export default ProductSize
