import { AuthState } from '../../types'
import { requester } from '../config'

export type LoginParams = {
  email: string
  password: string
  remember: boolean
}

export const logIn = (data: LoginParams) => {
  return requester.post<AuthState>(
    '/login',
    { ...data },
    {
      alertErrorMessage: true,
    },
  )
}

interface CreateUserFormData {
  email: string
  password: string
  account: string
  firstname: string
  lastname: string
  from?: string
}

export const createUser = (formData: CreateUserFormData) => {
  return requester.post<AuthState>('/createuser', formData)
}

export const forgotPassword = (data: { email: string }) => {
  return requester.post('/forgot-password', data, {
    alertErrorMessage: true,
  })
}

export const resetPassword = (data: { password: string; token: string }) =>
  requester.post('/reset-password', data, {
    alertErrorMessage: true,
  })

export const userIdex = () => requester.get('/user')

export const resendVerification = () => {
  return requester.get('/resendverification', {
    alertErrorMessage: true,
  })
}

export type VerifyEmailParams = { token: string }

export const verifyAccount = (data: VerifyEmailParams) => {
  return requester.post('/verifyemail', data, {
    alertErrorMessage: true,
  })
}

export const logOut = () => {
  return requester.post('/logout', undefined, {
    alertErrorMessage: true,
  })
}

export type UpdateUserParams = {
  firstname: string
  lastname: string
  phone: string
  image: string
  experience?: string
  availability?: string
  work_type?: string
  locations?: string
}

export const updateUser = (user: UpdateUserParams) => {
  return requester.post('/user/update-profile', user, {
    alertMessage: true,
  })
}

export type ChangePasswordParams = {
  oldpassword: string
  newpassword: string
}

export const changePassword = (data: ChangePasswordParams) => {
  return requester.post('/user/change-password', data, {
    alertMessage: true,
  })
}
