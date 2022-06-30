import React, { useEffect } from 'react'
import NextLink from 'next/link'
import Text, { headline1 } from '../../components/Text'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import { getAllUsers } from '../../api/admin/index'
import { getAllUser, updateAllUser } from '../../store/reducers/registerUser'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

const AdminCarts = () => {

  const allUsers = useAppSelector(getAllUser)
  const dispatch = useAppDispatch()


  useEffect(() => {
    getAllUsers().then((res) => {

      if (res.data.users) {
        dispatch(updateAllUser(res.data.users))
      }

    })

  }, [])
  return (
    <Layout login={true} title={'All Users'}>

      <div className="lg:mt-2 pt-4 pb-8 lg:pb-24">
        <Container className="flex flex-col">
          <Text as="h2" theme={headline1} className="self-center text-gray-700">
            All User's
          </Text>
        </Container>

        <Container
          as="ul"
          className=" mt-4 justify-center items-center"
        >
          <div className='flex justify-center'>
            <Text as="h2" className="self-center text-black-400">
              Please select a user to view chat
            </Text>

          </div>
          <div className='mt-6 flex justify-center'>
            <table className="table-auto">
              <thead className='my-2'>
                <tr className=' bg-white py-3 mb-4 rounded-lg border'>
                  <th className='px-4'>Id</th>
                  <th className='px-4'>Name</th>
                  <th className='px-4'>E-mail</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((us, index) => <tr key={index} className='my-2 hover:bg-white hover:shadow-lg hover:border-solid hover:border-light-gray-500 hover:rounded-lg'>
                  <td className='px-4'>{index + 1}</td>
                  <td className='px-4'>
                    <NextLink href={`/admin/user-chat?id=${us.id}`}>
                      <a href={'/register'}>{us.firstName} {us.lastName} </a>
                    </NextLink>
                  </td>
                  <td className='px-4'>{us.email}</td>
                </tr>)}


              </tbody>
            </table>
          </div>

        </Container>

      </div >

    </Layout >
  )
}


export default AdminCarts
