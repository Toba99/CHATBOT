import React from 'react'
import classNames from 'classnames'
import { css } from '@emotion/css'
import Text from './Text'
import { useAppDispatch } from '../hooks/hooks'
import { selectSize } from '../store/reducers/registerUser'

const ProductSize = (props) => {
  const dispatch = useAppDispatch()
  return (
    <div onClick={() => dispatch(selectSize(props.siz))} className={classNames(
      'mx-1 flex lg:ml-6 hover:bg-green-400 rounded-b-r-lg justify-center',
      css`
       width: 80px;
       background: ${props.selected};
       border-radius: 90px 90px 90px 90px;
      `,
    )}>
      <Text
        as="h3"
        className=" mx-1 font-display font-semibold text-white capitalize"
      >
        {props.siz}
      </Text>
    </div>
  )
}

export default ProductSize
