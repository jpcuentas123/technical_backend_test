import { HttpStatusCode } from 'axios'
import { IPresignedAcceptance } from './AcceptanceToken'
import { IPaymentSource, IPaymentSourceProps } from './PaymentSource'

type TWompiRepository = {
  getAcceptanceToken: () => Promise<{
    data: IPresignedAcceptance
    status: HttpStatusCode
  }>
  createPaymentSource: (props: IPaymentSourceProps) => Promise<{
    data: IPaymentSource
    status: HttpStatusCode
  }>
}

export { TWompiRepository }
