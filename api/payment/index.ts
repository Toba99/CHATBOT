import { requester } from '../config'

export type VerifyPaymentFormData = {
  id: string
  ref: string
  status: 'wallet' | 'cv'
}

export const verifyPayment = ({ id, ref, status }: VerifyPaymentFormData) =>
  requester.post<VerifyPaymentResponse>('/payment/verify', {
    id,
    ref,
    status,
  })

export type VerifyPaymentResponse = {
  authorization_url: string
  access_code: string
  reference: string
}
export const StaffConfirmCV = (formData: { orderid: string }) =>
  requester.post(`/staff/confirm-cv`, formData, { alertErrorMessage: true })
