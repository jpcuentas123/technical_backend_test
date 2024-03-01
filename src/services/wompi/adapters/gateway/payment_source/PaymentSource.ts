import { HttpStatusCode } from 'axios'
import PAYMENT_SOURCE from '../../mocks/paymentSource'
import {
  IPaymentSource,
  IPaymentSourceProps,
} from 'src/services/wompi/core/domain/PaymentSource'

const createPaymentSource = async (
  props: IPaymentSourceProps // TODO: send this to the gateway
): Promise<{
  data: IPaymentSource
  status: HttpStatusCode
}> => {
  try {
    return {
      data: PAYMENT_SOURCE,
      status: HttpStatusCode.Ok,
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export { createPaymentSource }
