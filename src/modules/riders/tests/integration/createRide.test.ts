import { Request, Response } from 'express'
import psqlService from '@shared/adapters/gateways/db'
import request from 'supertest'
import app from '@root/src/app'
import config from '@root/src/config/config'
describe('create ride', () => {
  it('should create ride', async () => {
    const API_URL = config.API.URL + 'riders'
    const req = {
      body: { latitude: 1000, longitude: 1000 },
    } as unknown as Request
    const res = { status: jest.fn() } as unknown as Response

    // const mockPsqlCreate = jest
    //   .spyOn(psqlService, 'create')
    //   .mockImplementation(async () => ({}))

    // const mockPsqlList = jest
    //   .spyOn(psqlService, 'list')
    //   .mockImplementation(async () => [])

    const response = await request(app).post(API_URL).send(req.body)

    expect(response).toBe({})
    // expect(mockPsql).toBeCalled()
  })
})
