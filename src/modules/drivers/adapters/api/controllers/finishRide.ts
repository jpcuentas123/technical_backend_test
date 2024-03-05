import { HttpStatusCode } from 'axios'
import { Request, Response } from 'express'
import * as riderRepo from '@riders/adapters/repositories'

import * as driverUseCases from '@drivers/core/application/'

export const finishRideController = async (req: Request, res: Response) => {
  try {
    const { ride_id } = req.params
    const rideResult = await driverUseCases.finishRide(riderRepo, ride_id)

    return res.status(HttpStatusCode.Ok).json(rideResult)
  } catch (e) {
    return res.status(HttpStatusCode.InternalServerError).json({
      message: e,
    })
  }
}
