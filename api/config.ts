import Axios, { AxiosResponse } from 'axios'
import { ApiResponse } from '../types'

const axios = Axios.create({
  baseURL: "http://127.0.0.1:3001",
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
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
    .catch((error) => {
      if (error.response) {
        throw error.response.data
      }
      throw error
    })
}
//  ssh -i clement.cer ubuntu@35.172.217.94
const requester: Requester = {
  get(...args) {
    return extractResponse(axios.get(...args))
  },
  post(...args) {
    return extractResponse(axios.post(...args))
  },
}

export { requester, axios }
