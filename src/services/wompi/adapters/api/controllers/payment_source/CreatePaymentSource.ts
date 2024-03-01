import { Request, Response } from 'express'
import * as wompiGateway from '../../../gateway/index'
import * as wompiUseCases from './../../../../core/application/'
import {
  EPaymentSourceTypes,
  IPaymentSourceProps,
} from '@services/wompi/core/domain/PaymentSource'
import TOKENIZED_CARD from '@services/wompi/adapters/mocks/tokenized_card'
import { HttpStatusCode } from 'axios'

export const createPaymentSource = async (
  req: Request<any, any, IPaymentSourceProps>,
  res: Response
): Promise<Response> => {
  try {
    // TODO: check body props with zod
    const props: IPaymentSourceProps = {
      acceptance_token: req.body.acceptance_token,
      customer_email: req.body.customer_email,
      token: TOKENIZED_CARD.data.id,
      type: EPaymentSourceTypes.CARD,
    }

    const paymentSource = await wompiUseCases.createPaymentSource(
      wompiGateway,
      props
    )

    return res.status(paymentSource.status).json(paymentSource.data)
  } catch (e) {
    console.log(e)
    return res.status(HttpStatusCode.InternalServerError).json({
      message: e,
    })
  }
}
