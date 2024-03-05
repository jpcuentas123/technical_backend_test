import { HttpStatusCode } from 'axios'
import { ITransactions, TTransactionToCreate } from './Transactions'

export type TTransactionRepository = {
  createTransaction: (transaction: TTransactionToCreate) => Promise<{
    data: ITransactions
    status: HttpStatusCode
  }>
  updateTransaction: (
    transaction_id: string,
    amount: number
  ) => Promise<{
    data: ITransactions
    status: HttpStatusCode
  }>
}
