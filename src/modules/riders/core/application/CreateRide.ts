import { TWompiRepository } from '@services/wompi/core/domain/WompiRepository'
import { TRideRepository } from '../domain/RideRepository'
import { ERideStatus, IRides } from '../domain/Rides'
import { EPaymentSourceTypes } from '@services/wompi/core/domain/PaymentSource'
import TOKENIZED_CARD from '@services/wompi/adapters/mocks/tokenized_card'
import { HttpStatusCode } from 'axios'
import PAYMENT_SOURCE from '@services/wompi/adapters/mocks/paymentSource'

const getAcceptanceToken = async (wRepo: TWompiRepository) => {
  const { data: acceptance_token, ...acceptance_token_result } =
    await wRepo.getAcceptanceToken()

  if (acceptance_token_result.status !== HttpStatusCode.Ok) {
    throw new Error(JSON.stringify(acceptance_token_result))
  }

  return acceptance_token
}

const getPaymentSource = async (
  wRepo: TWompiRepository,
  acceptance_token: string
) => {
  const payment_source = await wRepo.createPaymentSource({
    customer_email: '',
    type: EPaymentSourceTypes.CARD,
    token: TOKENIZED_CARD.data.id,
    acceptance_token: acceptance_token,
  })

  if (payment_source.status !== HttpStatusCode.Created) {
    throw new Error(JSON.stringify(payment_source))
  }

  return payment_source
}

const createTransaction = async (
  rideRepo: TRideRepository,
  payment_source_id,
  ride_id
) => {
  const { status, ...result } = await rideRepo.createTransaction({
    amount: 0,
    payment_source_id,
    ride_id,
  })

  if (status !== HttpStatusCode.Created) {
    throw new Error(JSON.stringify(result))
  }

  return
}

const setRideStatusError = async (
  rideRepo: TRideRepository,
  id,
  statusCode
) => {
  try {
    if (statusCode === HttpStatusCode.Created) {
      await rideRepo.updateRide(ERideStatus.ERROR, id)
    }
  } catch (e) {
    throw new Error(e)
  }
}

export const createRide = async (
  rideRepo: TRideRepository,
  ride: IRides,
  wRepo: TWompiRepository
) => {
  const rideCreated = await rideRepo.createRide(ride)

  if (rideCreated.status !== HttpStatusCode.Created) {
    throw new Error(JSON.stringify(rideCreated))
  }

  try {
    // Get acceptance token from w
    // const acceptance_token = await getAcceptanceToken(wRepo)

    // create a payment source
    // const payment_source = await getPaymentSource(wRepo, acceptance_token)
    const payment_source = PAYMENT_SOURCE

    // create a transaction record
    await createTransaction(
      rideRepo,
      payment_source.data.id,
      rideCreated.data.id
    )

    return rideCreated
  } catch (e) {
    await setRideStatusError(rideRepo, rideCreated.data.id, rideCreated.status)
    throw new Error(e)
  }
}
