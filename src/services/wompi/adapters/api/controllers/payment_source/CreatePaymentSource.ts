import { Request, Response } from 'express'
import * as wompiGateway from '../../../gateway/index'
import * as wompiUseCases from './../../../../core/application/'
import { IPaymentSourceProps } from 'src/services/wompi/core/domain/PaymentSource'

export const createPaymentSource = async (
  req: Request<any, any, IPaymentSourceProps>,
  res: Response
): Promise<Response> => {
  // TODO: check body props with zod
  const props = req.body

  const paymentSource = await wompiUseCases.createPaymentSource(
    wompiGateway,
    props
  )

  return res.status(paymentSource.status).json(paymentSource.data)
}
