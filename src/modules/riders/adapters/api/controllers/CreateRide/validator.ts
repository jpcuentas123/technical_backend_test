import { validate } from '@utils/validate'
import { body } from 'express-validator'

export const createRideValidation = validate([
  body('latitude').isNumeric().isLength({ min: 1 }),
  body('longitude').isNumeric().isLength({ min: 1 }),
])
