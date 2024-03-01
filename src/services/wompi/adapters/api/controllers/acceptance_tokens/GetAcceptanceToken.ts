import { Request, Response } from 'express'
import * as wompiGateway from '@services/wompi/adapters/gateway'
import * as wompiUseCases from '@services/wompi/core/application'
import { HttpStatusCode } from 'axios'

export const getAcceptanceToken = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const acceptanceToken = await wompiUseCases.getAcceptanceToken(wompiGateway)

    return res.status(acceptanceToken.status).json(acceptanceToken.data)
  } catch (e) {
    return res.status(HttpStatusCode.InternalServerError).json({
      message: e,
    })
  }
}
