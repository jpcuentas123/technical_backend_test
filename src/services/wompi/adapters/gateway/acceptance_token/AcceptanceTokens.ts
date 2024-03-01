import axios from 'axios'
import { PRESIGNED_ACCEPTANCE_TOKEN } from '../../mocks/acceptance_token'
import { IPresignedAcceptance } from '../../../core/domain/AcceptanceToken'

const getAcceptanceToken = async (): Promise<{
  data: IPresignedAcceptance
  status: number
}> => {
  try {
    return {
      data: PRESIGNED_ACCEPTANCE_TOKEN,
      status: 200,
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export { getAcceptanceToken }
