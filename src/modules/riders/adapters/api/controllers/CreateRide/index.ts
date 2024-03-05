import { createRideController } from './controller'
import { createRideValidation } from './validator'

export const createRide = {
  controller: createRideController,
  validator: createRideValidation,
}
