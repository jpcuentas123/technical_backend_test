import { HttpStatusCode } from 'axios'
import { IUser } from './User'

export type TUserRepository = {
  getFreeDrivers: () => Promise<{
    data: IUser[]
    status: HttpStatusCode
  }>
}
