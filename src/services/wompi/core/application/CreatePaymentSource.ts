import { IPaymentSourceProps } from '../domain/PaymentSource'
import { TWompiRepository } from '../domain/WompiRepository'

export const createPaymentSource = async (
  repo: TWompiRepository,
  props: IPaymentSourceProps
) => await repo.createPaymentSource(props)
