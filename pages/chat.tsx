import React, { useEffect } from 'react'
import classNames from 'classnames'
import { css } from '@emotion/css'
import Text, { headline1 } from '../components/Text'
import Container from '../components/Container'
import Layout from '../components/Layout'
import moment from 'moment'
import { selecteItem, deleteFromCart, getCart } from '../store/reducers/registerUser'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import Icon from '../components/Icon'

// "text-gray-700 font-bold mb-2 lg:mb-4 text-center lg:text-left"

const Chat = () => {



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
            <div className="my-2 ">
              <div
                className={classNames(
                  'bg-gray-300 text-gray-800 px-2 rounded-lg',
                  css`
                background-color: #e9f4ff;
              `,
                )}
              >
                hi
              </div>
              <span className="text-xs mx-2">
                {moment(new Date).format('MM/DD/YYYY h:mm a')}
              </span>
            </div>

            <div className="my-2 text-right ">
              <div
                className={classNames(
                  'bg-gray-300  text-gray-800 text-right px-2 rounded-lg',
                  css`
                background-color: #1286ff42;
              `,
                )}
              >
               hello 
              </div>
              <span className="text-xs mx-2">
                {moment(new Date).format('MM/DD/YYYY h:mm a')}
              </span>
            </div>

            <div className="flex justify-between px-2 py-1 w-full border-solid border-2 border-primary-400 rounded-full">
            <input
              type="text"
              value=""
             
              className={classNames(
                'py-1 px-1 mx-1 focus:outline-none  ',
                css`
                  width: 90%;
                `,
              )}
              placeholder="Enter Message......"
              id=""
            />
            <button
             
              className="bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-400"
            >
              {'send '}
              <Icon name="chevron-right" className="mx-3" size={18} />
            </button>
          </div>
          </div>

        </Container>

      </div >

    </Layout >
  )
}


export default Chat
