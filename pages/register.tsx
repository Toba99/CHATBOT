import React, { useCallback } from 'react'
import Text, { headline1 } from '../components/Text'
import Container from '../components/Container'
import Layout from '../components/Layout'
import { createUser } from '../api/auth/'
import cogoToast from 'cogo-toast';
import { updateFormData, getFormData } from '../store/reducers/registerUser'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

// "text-gray-700 font-bold mb-2 lg:mb-4 text-center lg:text-left"
type formData = {
  firstName: string
  lastName: string
  email: string
  password: string
}
const Register = () => {
 
  const formData = useAppSelector(getFormData)
  const dispatch = useAppDispatch()
  const setData = useCallback((newData: formData) => {
    dispatch(updateFormData(newData))
  }, [])

  return (
    <Layout page={false} title={'Login'}>

      <div className="lg:mt-2 pt-4 pb-8 lg:pb-24">
        <Container className="flex flex-col">
          <Text as="h2" theme={headline1} className="self-center text-gray-700">
            Register
          </Text>
        </Container>

        <Container
          as="ul"
          className=" mt-4 justify-center items-center"
        >
          <div className='flex justify-center'>
            <Text as="h2" className="self-center text-gray-400">
              provide all required information to get you set up
            </Text>

          </div>

          <div className='flex flex-col content-center items-center justify-start min-h-screen'>
            <label className="block my-1">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                First Name
              </span>
              <input type="text" name="firstName" value={formData.firstName} onChange={(e) => setData({ ...formData, firstName: e.target.value })} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="John" />
            </label>
            <label className="block my-1">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Last Name
              </span>
              <input type="text" name="firstName" value={formData.lastName} onChange={(e) => setData({ ...formData, lastName: e.target.value })} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Doe" />
            </label>
            <label className="block my-1">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input type="email" name="email" value={formData.email} onChange={(e) => setData({ ...formData, email: e.target.value })} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>
            <label className="block my-1">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                PassWord
              </span>
              <input type="email" name="password" value={formData.password} onChange={(e) => setData({ ...formData, password: e.target.value })} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="q.wde@eht421" />
            </label>
            <button className='bg-blue-500 text-white my-1 mx-1 px-4 py-1 lg:ml-6 hover:bg-blue-400 h-9 flex rounded-lg justify-center mx-2 text-xl'
              onClick={async () => {
               const regRes = await createUser(formData);
               if (regRes.status === false) {
                 if (regRes.data && Array.isArray(regRes.data)) {
                  regRes.data.forEach(er => {
                    cogoToast.error(er);
                   });
                 }else cogoToast.error(regRes.message)
               
               }else{
                 console.log(regRes);
                 
                cogoToast.success(regRes.message).then (()=> location.replace('/chat'));
                
               }
               
              }}
            >
              Login
            </button>
          </div>




        </Container>

      </div >

    </Layout >
  )
}


export default Register
