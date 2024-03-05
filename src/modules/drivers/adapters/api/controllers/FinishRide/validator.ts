import { validate } from '@utils/validate'
import { body, param } from 'express-validator'

export const finishRideValidator = validate([
  body('final_location').isObject(),
  body('minutes').isInt(),
  param('ride_id').isUUID().notEmpty(),
])
