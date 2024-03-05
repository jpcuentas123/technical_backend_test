import { API_ERRORS } from '@config/errors'
import { NextFunction, Request, Response } from 'express'
import { ValidationChain, validationResult } from 'express-validator'

interface ValidateFn {
  (validations: ValidationChain[]): (
    _req: Request,
    _res: Response,
    _next: NextFunction
  ) => Promise<void>
}

const validate: ValidateFn = validations => async (_req, _res, _next) => {
  // parallel processing
  await Promise.all(validations.map(async validation => validation.run(_req)))

  const errors = validationResult(_req)

  const noErrors: boolean = errors.isEmpty()

  if (noErrors) {
    return _next()
  }

  // @ts-ignore
  const { msg, path } = errors.array()[0]
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  _res
    .status(400)
    .json({ error: `${path} ${msg}`, type: API_ERRORS.REQUEST_INVALID_BODY })
}

export { validate }
