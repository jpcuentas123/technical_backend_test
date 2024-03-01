import { HttpStatusCode } from 'axios'
import { ERideStatus, IRides } from './../../../core/domain/Rides'
import { psqlDB } from '@shared/adapters/gateways/db'

export const createRide = async (
  ride: IRides
): Promise<{
  data: IRides
  status: HttpStatusCode
}> => {
  const { from_location, to_location, user_id, payment_source } = ride
  const rideStatus = ERideStatus.IDLE
  const from_locationString = JSON.stringify(from_location)
  const to_locationString = JSON.stringify(to_location)

  const query = {
    text: `
          INSERT INTO rides ("from_location", "to_location", "ride_status", "user_id", "payment_source")
          VALUES ($1, $2, $3, $4, $5) RETURNING *;
        `,
    values: [
      from_locationString,
      to_locationString,
      rideStatus,
      user_id,
      payment_source,
    ],
  }

  const createdRide = await psqlDB.create(query)

  return {
    data: createdRide[0],
    status: HttpStatusCode.Created,
  }
}
