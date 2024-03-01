import axios from 'axios'
import { IPresignedAcceptance } from '@services/wompi/core/domain/AcceptanceToken'
import config from '@config/config'

const getAcceptanceToken = async (): Promise<{
  data: string
  status: number
}> => {
  try {
    const result = (await axios.get(
      `${config.W_URL}merchants/${config.W_PUB_TEST}`
    )) as IPresignedAcceptance

    return {
      data: result.data.presigned_acceptance.acceptance_token,
      status: 200,
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export { getAcceptanceToken }
