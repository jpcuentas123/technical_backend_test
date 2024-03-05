import { ITransactions } from '@transactions/core/domain/Transactions'
import psqlDB from '@shared/adapters/gateways/db'
import { HttpStatusCode } from 'axios'

export const getTransactionByRideId = async (
  rideId: string
): Promise<{
  data: ITransactions
  status: HttpStatusCode
}> => {
  const query = {
    text: `
      SELECT * FROM transactions WHERE "ride_id" = $1
          `,
    values: [rideId],
  }

  const createdTransaction = await psqlDB.create(query)

  return {
    data: createdTransaction[0],
    status: HttpStatusCode.Ok,
  }
}
