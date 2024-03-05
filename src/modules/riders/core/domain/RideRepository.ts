import { HttpStatusCode } from 'axios'
import { ERideStatus, IRides, TCreateRide } from './Rides'

export type TRideRepository = {
  createRide: (ride: TCreateRide) => Promise<{
    data: IRides
    status: HttpStatusCode
  }>
  updateRideStatus: (
    rideStatus: ERideStatus,
    id: string
  ) => Promise<{
    data: IRides
    status: HttpStatusCode
  }>
  updateRideDriver: (
    ride_id: string,
    driver_id: string
  ) => Promise<{
    data: IRides
    status: HttpStatusCode
  }>
}
