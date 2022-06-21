import React, { useEffect } from 'react'
import classNames from 'classnames'
import { css } from '@emotion/css'
import Text, { headline1 } from '../components/Text'
import Container from '../components/Container'
import Layout from '../components/Layout'
import { selecteItem, deleteFromCart, getCart } from '../store/reducers/cart'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

// "text-gray-700 font-bold mb-2 lg:mb-4 text-center lg:text-left"

const Carts = () => {



  return (
    <Layout page={false} title={'Login'}>

      <div className="lg:mt-2 pt-4 pb-8 lg:pb-24">
        <Container className="flex flex-col">
          <Text as="h2" theme={headline1} className="self-center text-gray-700">
            Chat
          </Text>
        </Container>

        <Container
          as="ul"
          className=" mt-4 justify-center items-center"
        >

          <div className='mx-6 border border-indigo-600'>
            
          </div>

        </Container>

      </div >

    </Layout >
  )
}


export default Carts
