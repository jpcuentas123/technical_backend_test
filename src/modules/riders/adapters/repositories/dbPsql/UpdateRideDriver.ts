import { QueryConfig } from 'pg'
import { IRides } from './../../../core/domain/Rides'
import psqlDB from '@shared/adapters/gateways/db'
import { HttpStatusCode } from 'axios'

export const updateRideDriver = async (
  ride_id: string,
  driver_id: string
): Promise<{
  data: IRides
  status: HttpStatusCode
}> => {
  const query: QueryConfig = {
    text: `UPDATE "rides"
      SET "driver_id"=$2
      WHERE id=$1 RETURNING *;
    `,
    values: [ride_id, driver_id],
  }

  const updatedRide = await psqlDB.create(query)

  return {
    data: updatedRide,
    status: HttpStatusCode.Ok,
  }
}
