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
            Login
          </Text>
        </Container>

        <Container
          as="ul"
          className=" mt-4 justify-center items-center"
        >
          <div className='flex justify-center'>
            <Text as="h2" className="self-center text-gray-400">
              Enter your email and password to login
            </Text>

          </div>

          <div className='flex flex-col content-center items-center justify-start min-h-screen'>
            <label className="block my-1">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>
            <label className="block my-1">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                PassWord
              </span>
              <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>
            <button className='bg-blue-500 text-white my-1 mx-1 px-4 py-1 lg:ml-6 hover:bg-blue-400 h-9 flex rounded-lg justify-center mx-2 text-xl'>
              Login
            </button>
          </div>




        </Container>

      </div >

    </Layout >
  )
}


export default Carts
