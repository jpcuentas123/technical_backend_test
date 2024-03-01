import { Request, Response } from 'express'
import * as wompiGateway from '../../../gateway/index'
import * as wompiUseCases from './../../../../core/application/'

export const getAcceptanceToken = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const acceptanceToken = await wompiUseCases.getAcceptanceToken(wompiGateway)

  return res.status(acceptanceToken.status).json(acceptanceToken.data)
}
