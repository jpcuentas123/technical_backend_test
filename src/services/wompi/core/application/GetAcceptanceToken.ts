import { TWompiRepository } from '../domain/WompiRepository'

export const getAcceptanceToken = async (repo: TWompiRepository) =>
  await repo.getAcceptanceToken()
