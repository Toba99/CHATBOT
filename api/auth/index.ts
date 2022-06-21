import { AuthState } from '../../types'
import { requester } from '../config'

export type LoginParams = {
  email: string
  password: string
}

export const logIn = (data: LoginParams) => {
  return requester.post<AuthState>(
    'auth/login',
    { ...data },
    {
      alertErrorMessage: true,
    },
  )
}

interface CreateUserFormData {
  email: string
  password: string
  firstName: string
  lastName: string
}

export const createUser = (formData: CreateUserFormData) => {
  return requester.post<AuthState>('auth/register', formData)
}

export const logOut = () => {
  return requester.post('/logout', undefined, {
    alertErrorMessage: true,
  })
}

