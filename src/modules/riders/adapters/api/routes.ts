import { Router } from 'express'
import * as controllers from './controllers/'

const router: Router = Router()

router
  .route('/riders')
  .post(controllers.createRide.validator, controllers.createRide.controller)

export default router
