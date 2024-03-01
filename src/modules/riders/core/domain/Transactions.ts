export enum ETransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}

export interface ITransactions {
  id: string
  payment_source_id: string
  transaction_status: ETransactionStatus
  created_at: string
  updated_at: string
  ride_id: string
  amount: number
}

export type TTransactionToCreate = Omit<
  ITransactions,
  'id' | 'created_at' | 'updated_at' | 'transaction_status'
>
