import { HttpStatusCode } from 'axios'
import { IPaymentSource, IPaymentSourceProps } from './PaymentSource'

type TWompiRepository = {
  getAcceptanceToken: () => Promise<{
    data: string
    status: HttpStatusCode
  }>
  createPaymentSource: (props: IPaymentSourceProps) => Promise<{
    data: IPaymentSource
    status: HttpStatusCode
  }>
}

export { TWompiRepository }
