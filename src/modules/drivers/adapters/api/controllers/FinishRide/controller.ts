import { HttpStatusCode } from 'axios'
import { Request, Response } from 'express'
import * as riderRepo from '@riders/adapters/repositories'
import * as transactionRepo from '@transactions/adapters/repositories'
import * as driverUseCases from '@drivers/core/application/'

export const finishRideController = async (req: Request, res: Response) => {
  try {
    const { ride_id } = req.params
    const { final_location, minutes } = req.body
    const rideResult = await driverUseCases.finishRide(
      riderRepo,
      transactionRepo,
      ride_id,
      final_location,
      minutes
    )

    return res.status(HttpStatusCode.Ok).json(rideResult)
  } catch (e) {
    return res.status(HttpStatusCode.InternalServerError).json({
      message: e,
    })
  }
}
