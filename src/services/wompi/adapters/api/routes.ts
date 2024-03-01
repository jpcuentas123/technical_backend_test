import { Router } from 'express'
import * as controllers from './controllers'

const router: Router = Router()

router.route('/acceptance_token').get(controllers.getAcceptanceToken)

export default router
