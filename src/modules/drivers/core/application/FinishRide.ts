import { TRideRepository } from '@riders/core/domain/RideRepository'
import { ERideStatus } from '@riders/core/domain/Rides'
import getAmountInCents from '@utils/getAmountInCents'
import { HttpStatusCode } from 'axios'

const calculateRidePrice = (initialLocation, finalLocation, minutes) => {
  const COST_PER_KM = 1000
  const COST_PER_MIN = 200
  const BASE_FEE = 3500
  const distanceInKm = finalLocation - initialLocation
  const distanceCost = distanceInKm * COST_PER_KM
  const minutesCost = minutes * COST_PER_MIN
  const result = distanceCost + minutesCost + BASE_FEE

  return getAmountInCents(result)
}
export const finishRide = async (rideRepo: TRideRepository, rideId) => {
  const rideResult = await rideRepo.updateRideStatus(
    ERideStatus.FINISHED,
    rideId
  )
  return rideResult
}
