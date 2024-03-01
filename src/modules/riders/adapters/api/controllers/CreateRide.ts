import { HttpStatusCode } from 'axios'
import { Request, Response } from 'express'
import * as rideRepository from '@riders/adapters/repositories/'
import * as wRepository from '@services/wompi/adapters/gateway'

import * as rideUseCases from '@riders/core/application/'
import { IRides } from '@riders/core/domain/Rides'

export const createRide = async (
  req: Request<any, any, IRides>,
  res: Response
) => {
  try {
    // TODO: check this data with zod
    const ride = req.body

    const result = await rideUseCases.createRide(
      rideRepository,
      ride,
      wRepository
    )

    return res.status(HttpStatusCode.Created).json(result.data)
  } catch (e) {
    return res.status(HttpStatusCode.InternalServerError).json({
      message: e,
      body: req.body,
    })
  }
}
