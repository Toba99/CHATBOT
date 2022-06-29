import { requester } from '../config'

export const getChat = () =>
  requester.get(`/chat/`)

export const sendChat = (formData: { message: string }) =>
  requester.post(`/chat/`, formData, { alertErrorMessage: true })
