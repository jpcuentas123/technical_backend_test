import { QueryConfig } from 'pg'
import { psqlDB } from '@shared/adapters/gateways/db'
import { HttpStatusCode } from 'axios'
import { IUser } from 'src/modules/users/core/domain/User'

export const getFreeDrivers = async (): Promise<{
  data: IUser[]
  status: HttpStatusCode
}> => {
  const query: QueryConfig = {
    text: `SELECT * FROM users WHERE user_type='DRIVER' AND user_status='FREE';
    `,
  }

  const updatedRide = await psqlDB.list(query)

  return {
    data: updatedRide,
    status: HttpStatusCode.Ok,
  }
}
