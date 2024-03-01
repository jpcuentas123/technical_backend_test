import axios, { HttpStatusCode } from 'axios'
import {
  IPaymentSource,
  IPaymentSourceProps,
} from '@services/wompi/core/domain/PaymentSource'
import config from '@config/config'

const createPaymentSource = async (
  props: IPaymentSourceProps
): Promise<{
  data: IPaymentSource
  status: HttpStatusCode
}> => {
  const { token, customer_email, acceptance_token } = props
  try {
    const { data, status } = await axios.post(
      `${config.W_URL}payment_sources`,
      {
        type: 'CARD',
        token,
        customer_email,
        acceptance_token,
      },
      {
        headers: {
          Authorization: `Bearer ${config.W_PRIV_TEST}`,
        },
      }
    )

    return {
      data,
      status,
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export { createPaymentSource }
