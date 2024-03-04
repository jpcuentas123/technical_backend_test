import { TRideRepository } from '@riders/core/domain/RideRepository'
import { IRides } from '@riders/core/domain/Rides'
import { TWompiRepository } from '@services/wompi/core/domain/WompiRepository'
import { IUser } from '@users/core/domain/User'
import { TUserRepository } from '@users/core/domain/UserRepository'
import { HttpStatusCode } from 'axios'

export const assignDriver = async (
  rideId: string,
  userRepo: TUserRepository,
  rideRepo: TRideRepository
): Promise<{
  data: {
    ride: IRides | {}
    driver: IUser | {}
  }

  status: HttpStatusCode
}> => {
  const drivers = await userRepo.getFreeDrivers()

  if (drivers.status !== HttpStatusCode.Ok) {
    throw new Error(JSON.stringify(drivers))
  }

  if (drivers.data.length === 0) {
    return {
      data: {
        ride: {},
        driver: {},
      },
      status: HttpStatusCode.Ok,
    }
  }

  const firstDriver = drivers.data[0]

  const rideUpdated = await rideRepo.updateRideDriver(rideId, firstDriver.id)

  if (rideUpdated.status !== HttpStatusCode.Ok) {
    throw new Error(JSON.stringify(rideUpdated))
  }

  return {
    data: {
      driver: firstDriver,
      ride: rideUpdated.data,
    },
    status: HttpStatusCode.Ok,
  }
}
