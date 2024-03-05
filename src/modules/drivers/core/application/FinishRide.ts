import { TRideRepository } from '@riders/core/domain/RideRepository'
import { ERideStatus } from '@riders/core/domain/Rides'
import { TTransactionRepository } from '@root/src/modules/transactions/core/domain/TransactionRepository'
import calculateDistance from '@utils/calculateDistance'
import getAmountInCents from '@utils/getAmountInCents'

const calculateRidePrice = (initialLocation, finalLocation, minutes) => {
  const COST_PER_KM = 1000
  const COST_PER_MIN = 200
  const BASE_FEE = 3500
  const distanceInKm = calculateDistance(initialLocation, finalLocation)
  const distanceCost = distanceInKm * COST_PER_KM
  const minutesCost = minutes * COST_PER_MIN
  const result = distanceCost + minutesCost + BASE_FEE

  return getAmountInCents(result)
}
export const finishRide = async (
  rideRepo: TRideRepository,
  transactionsRepo: TTransactionRepository,
  rideId,
  finalLocation,
  minutes
) => {
  try {
    const rideResult = await rideRepo.updateRideStatus(
      ERideStatus.FINISHED,
      rideId
    )

    const amount = calculateRidePrice(
      rideResult.data.from_location,
      finalLocation,
      minutes
    )
    const transaction = await transactionsRepo.getTransactionByRideId(
      rideResult.data.id
    )
    const transactionResult = await transactionsRepo.updateTransaction(
      transaction.data.id,
      amount
    )
    return {
      ride: rideResult,
      transaction: transactionResult,
    }
  } catch (e) {
    throw e
  }
}
