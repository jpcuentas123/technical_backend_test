import { QueryConfig } from 'pg'
import { ERideStatus, IRides } from './../../../core/domain/Rides'
import psqlDB from '@shared/adapters/gateways/db'
import { HttpStatusCode } from 'axios'

export const updateRideStatus = async (
  rideStatus: ERideStatus,
  id
): Promise<{
  data: IRides
  status: HttpStatusCode
}> => {
  const query: QueryConfig = {
    text: `UPDATE "rides"
      SET "ride_status"=$2
      WHERE id=$1 RETURNING *;
    `,
    values: [id, rideStatus],
  }

  const updatedRide = await psqlDB.create(query)

  return {
    data: updatedRide[0],
    status: HttpStatusCode.Ok,
  }
}
