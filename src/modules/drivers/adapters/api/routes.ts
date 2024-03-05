import { Router } from 'express'
import * as controllers from './controllers/'

const router: Router = Router()

router.route('/driver/ride/:ride_id').put(controllers.finishRideController)

export default router
