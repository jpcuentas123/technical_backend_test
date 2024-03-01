import { IPresignedAcceptance } from './AcceptanceToken'

type TWompiRepository = {
  getAcceptanceToken: () => Promise<{
    data: IPresignedAcceptance
    status: number
  }>
}

export { TWompiRepository }
