import { HttpStatusCode } from 'axios'
import { ERideStatus, IRides } from './Rides'
import { ITransactions, TTransactionToCreate } from './Transactions'

export type TRideRepository = {
  createRide: (ride: IRides) => Promise<{
    data: IRides
    status: HttpStatusCode
  }>
  updateRide: (rideStatus: ERideStatus, id: string) => Promise<any>
  createTransaction: (transaction: TTransactionToCreate) => Promise<{
    data: ITransactions
    status: HttpStatusCode
  }>
}
