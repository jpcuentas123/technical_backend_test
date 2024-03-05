import { HttpStatusCode } from 'axios'
import { ERideStatus, IRides, TCreateRide } from '@riders/core/domain/Rides'
import psqlDB from '@shared/adapters/gateways/db'

export const createRide = async (
  ride: TCreateRide
): Promise<{
  data: IRides
  status: HttpStatusCode
}> => {
  const { from_location, user_id } = ride
  const rideStatus = ERideStatus.IDLE
  const from_locationString = JSON.stringify(from_location)

  const query = {
    text: `
          INSERT INTO rides ("from_location", "ride_status", "user_id")
          VALUES ($1, $2, $3) RETURNING *;
        `,
    values: [from_locationString, rideStatus, user_id],
  }

  const createdRide = await psqlDB.create(query)

  return {
    data: createdRide[0],
    status: HttpStatusCode.Created,
  }
}
