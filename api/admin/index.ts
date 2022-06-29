import { requester } from '../config'

export const getAllUsers = () =>
  requester.get(`/admin/all-user`)

export const userChat = ({id}: { id: string }) =>
  requester.get(`/admin/user-chat/${id}`)
