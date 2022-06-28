import Axios, { AxiosResponse } from 'axios'
import { ApiResponse } from '../types'
let token
if (typeof window !== 'undefined') {
  if (localStorage.getItem("auth")) {
    const authData = JSON.parse(localStorage.getItem("auth") || '');
    if (authData.token) {
      token = authData.token
    }
  }
}

const axios = Axios.create({
  baseURL: "http://127.0.0.1:1337/api",
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
})

type Requester = {
  get<T = any, R = ApiResponse<T>>(
    ...args: Parameters<typeof axios.get>
  ): Promise<R>
  post<T = any, R = ApiResponse<T>>(
    ...args: Parameters<typeof axios.post>
  ): Promise<R>
}

const extractResponse = (axiosResponse: Promise<AxiosResponse>) => {
  return axiosResponse
    .then(({ data }) => data)
    .catch((error) => error.response.data ? error.response.data : console.log(error))
}

const requester: Requester = {
  get(...args) {
    return extractResponse(axios.get(...args))
  },
  post(...args) {
    return extractResponse(axios.post(...args))
  },
}

export { requester, axios }
