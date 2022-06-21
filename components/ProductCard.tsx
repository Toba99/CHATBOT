import React from 'react'
import classNames from 'classnames'
import { css } from '@emotion/css'
import Text from './Text'
import NextLink from 'next/link'

const ProductCard = (props) => {

  return (
    <div className="w-full mx-4 lg:mx-2 my-8 lg:w-1/4 shadow-lg border-solid border-4 pb-1 border-light-gray-500 rounded-lg">
      <NextLink href={`item-details?id=${props.id}`}>
        <a href={`item-details?id=${props.id}`}>

          <img
            src={props.image}
            alt=""
            className={classNames(
              'h-80 rounded-t w-full object-cover',
              css`
             
            `,
            )}
          />


        </a>
      </NextLink>

      <div className='mt-4 mx-2'>

        <Text
          as="h3"
          className="text-xl font-display font-semibold text-gray-800 capitalize"
        >
          {props.name}
        </Text>
        <Text
          className="text-sm font-display text-gray-400 capitalize"
        >
          {props.type}
        </Text>
        <div className='flex'>
          <i className="text-yellow-500 fas fa-star mx-1 my-1"></i>
          <i className="text-yellow-500 fas fa-star mx-1 my-1"></i>
          <i className="text-yellow-500 fas fa-star mx-1 my-1"></i>
          <i className="text-yellow-500 fas fa-star mx-1 my-1"></i>
        </div>
        <p className="mb-3 w-full text-gray-600">{props.description}</p>
   
        <div className='grid justify-items-end my-2'>
          <NextLink href={`item-details?id=${props.id}`}>
            <a href={`item-details?id=${props.id}`}>
              <Text className={classNames(
                'rounded-lg text-lg shadow-xl  hover:bg-blue-400  bg-blue-500 my-2 px-4 py-1 text-white',
                css``,
              )}> Buy Now {props.amount} </Text>
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
