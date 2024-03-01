import { Router } from 'express'
import * as controllers from './controllers'

const router: Router = Router()

router.route('/acceptance_token').get(controllers.getAcceptanceToken)
router.route('/payment_source').post(controllers.createPaymentSource)

export default router
