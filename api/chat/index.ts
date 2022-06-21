import { Product, } from '../../types'
import { requester } from '../config'


export const getProducts = () =>
  requester.get<{ products: Product[] }>(`/api/products/`)

export const getProductsDetails = (id: string) =>
  requester.get<{ products: Product[] }>(`/api/products/${id}`)

export const StaffDeleteCV = (formData: { orderid: string }) =>
  requester.post(`/staff/delete-cv`, formData, { alertErrorMessage: true })
