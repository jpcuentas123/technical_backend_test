import {
  ETransactionStatus,
  ITransactions,
  TTransactionToCreate,
} from '@riders/core/domain/Transactions'
import { psqlDB } from '@shared/adapters/gateways/db'
import { HttpStatusCode } from 'axios'

export const createTransaction = async (
  transaction: TTransactionToCreate
): Promise<{
  data: ITransactions
  status: HttpStatusCode
}> => {
  const { payment_source_id, ride_id, amount = 0 } = transaction

  const transaction_status = ETransactionStatus.PENDING
  const query = {
    text: `
    INSERT INTO transactions ("payment_source_id", "transaction_status", "ride_id", "amount") VALUES($1, $2, $3, $4) RETURNING *;
        `,
    values: [payment_source_id, transaction_status, ride_id, amount],
  }

  const createdTransaction = await psqlDB.create(query)

  return {
    data: createdTransaction,
    status: HttpStatusCode.Created,
  }
}
