import { FormStateMap } from 'redux-form'

export type RootState = {
  form?: FormStateMap
}

declare module 'jest-next-dynamic'

declare global {
  namespace NodeJS {
    export interface Process {
      browser: boolean
    }
  }
}




import { InputHTMLAttributes, ReactElement } from 'react'
import { Normalizer } from 'redux-form'

export type ApiFormField = {
  id: string
  fTitle: string
  fName: string
  fType: string
  fOption?: SelectOption[]
}

export type ApiResponse<T = any> = {
  message: string
  data: T
}

export type ApiError<T = {}> = ApiResponse<
  T & {
    form: { [key: string]: string }
  }
>

export type AuthState = {
  token: string
  user: User
}

declare module 'axios' {
  interface AxiosRequestConfig {
    alertMessage?: boolean
    alertSuccessMessage?: boolean
    alertErrorMessage?: boolean
  }
}

export interface Product {
  id: string
  category_id: string
  sub_category_id: string
  name: string
  amount: number
  description: string
  quantity_available: string
  image: string
  type: string
  meta: any
  created_at: string
}



type LabelValuePair<T = string> = { label: string; value: T }
