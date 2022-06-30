import React, { useEffect } from 'react'
import {useRouter} from "next/router";
import classNames from 'classnames'
import { css } from '@emotion/css'
import Text, { headline1 } from '../../components/Text'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import moment from 'moment'
import { updateChatData, getChatData, getMessage, getUser } from '../../store/reducers/registerUser'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import {  userChat } from '../../api/admin'

// "text-gray-700 font-bold mb-2 lg:mb-4 text-center lg:text-left"

const Chat = () => {
  const { query } = useRouter();
  const chatData = useAppSelector(getChatData)
  const dispatch = useAppDispatch()


  useEffect(() => {
    
    userChat({id: `${query.id}`}).then((res) => dispatch(updateChatData(res.data.chat)) )
  }, [])


  return (
    <Layout login={true} title={'Login'}>

      <div className="lg:mt-2 pt-4 pb-8 lg:pb-24">
        <Container className="flex flex-col">
          <Text as="h2" theme={headline1} className="self-center text-gray-700">
            User Chat's
          </Text>
        </Container>

        <Container
          as="ul"
          className=" mt-4 justify-center items-center"
        >

          <div className='mx-6 border border-indigo-600'>

            {chatData?.map((daa, index) => '1' === `${daa.user_id}` ? <div key={index} className="my-2 ">
              <div
                className={classNames(
                  'bg-gray-300 text-gray-800  px-2 rounded-lg',
                  css`
     background-color: #e9f4ff;
   `,
                )}
              >
                {daa.message}
              </div>
              <span className="text-xs mx-2">
                {moment(daa.created_at).format('MM/DD/YYYY h:mm a')}
              </span>
            </div> : <div key={index} className="my-2 text-right">
              <div
                className={classNames(
                  'bg-gray-300  text-gray-800 px-2 text-right rounded-lg',
                  css`
                background-color: #1286ff42;
              `,
                )}
              >
                {daa.message}
              </div>
              <span className="text-xs mx-2">
                {moment(daa.created_at).format('MM/DD/YYYY h:mm a')}
              </span>
            </div>)}


           
          </div>

          <div>
            <button className='bg-blue-500 text-white my-1 mx-1 px-4 py-1 lg:ml-6 hover:bg-blue-400 h-9 flex rounded-lg justify-center mx-2 text-xl' 
              onClick={async () => {window.print()}} style={{marginTop:30}}> 
              Download/Print 
            </button>
          </div>
        </Container>

      </div >

    </Layout >
  )
}


export default Chat
