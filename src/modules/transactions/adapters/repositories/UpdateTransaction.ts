import {
  ETransactionStatus,
  ITransactions,
} from '@transactions/core/domain/Transactions'
import psqlDB from '@shared/adapters/gateways/db'
import { HttpStatusCode } from 'axios'

export const updateTransaction = async (
  transaction_id: string,
  amount: number
): Promise<{
  data: ITransactions
  status: HttpStatusCode
}> => {
  const transaction_status = ETransactionStatus.COMPLETED
  const query = {
    text: `
    UPDATE "transactions"
      SET "amount"=$2, "transaction_status"=$3
      WHERE id=$1 RETURNING *;
        `,
    values: [transaction_id, amount, transaction_status],
  }

  const createdTransaction = await psqlDB.create(query)

  return {
    data: createdTransaction[0],
    status: HttpStatusCode.Ok,
  }
}
