import { HttpStatusCode } from 'axios'
import { Request, Response } from 'express'
import * as rideRepository from '@riders/adapters/repositories/'
import * as wRepository from '@services/wompi/adapters/gateway'
import * as userRepository from '@users/adapters/repositories/'
import * as transactionsRepository from '@transactions/adapters/repositories/'

import * as rideUseCases from '@riders/core/application/'
import * as driversUseCases from '@drivers/core/application/'
import { TLocationDetails } from '@riders/core/domain/Rides'

export const createRideController = async (
  req: Request<any, any, TLocationDetails>,
  res: Response
) => {
  try {
    const location = req.body

    const rideResult = await rideUseCases.createRide(
      rideRepository,
      transactionsRepository,
      location,
      wRepository
    )

    if (rideResult.status !== HttpStatusCode.Created)
      return res.status(rideResult.status).json(rideResult)

    const rideId = rideResult.data.id

    const driverResult = await driversUseCases.assignDriver(
      rideId,
      userRepository,
      rideRepository
    )

    return res.status(HttpStatusCode.Created).json({
      ride: driverResult.data.ride,
      driver: driverResult.data.driver,
    })
  } catch (e) {
    return res.status(HttpStatusCode.InternalServerError).json({
      message: e,
      body: req.body,
    })
  }
}
