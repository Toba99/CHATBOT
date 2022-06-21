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
export type Chat = {
  status: any
  data: any
  message: string
}
export type AuthState = {
  status: any
  data: any
  message: string
}

declare module 'axios' {
  interface AxiosRequestConfig {
    alertMessage?: boolean
    alertSuccessMessage?: boolean
    alertErrorMessage?: boolean
  }
}




type LabelValuePair<T = string> = { label: string; value: T }
