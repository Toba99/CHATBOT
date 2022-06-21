import React from 'react'
import classNames from 'classnames'
import { css } from '@emotion/css'
import Text from './Text'
import { useAppDispatch } from '../hooks/hooks'
import { selectColor } from '../store/reducers/cart'

const ProductColor = (props) => {
  
  const dispatch = useAppDispatch()
  return (
    <div  onClick={() => dispatch(selectColor(props.col))}  className={classNames(
      'mx-1 px-1 flex lg:ml-6 hover:bg-green-400 rounded-b-r-lg justify-center',
      css`
       background: ${props.selected};
       border-radius: 90px 90px 90px 90px;
      `,
    )}>
      <Text
        as="h3"
        className=" mx-1 font-display font-semibold text-white capitalize"
      >
        {props.col}
      </Text>
    </div>
  )
}

export default ProductColor
