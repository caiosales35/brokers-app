import request from 'supertest'
import app from '../../app'

const URL = '/api/v1/broker'

describe('Get Broker test', () => {
  it('Should return a list of Brokers', async () => {
    const response = await request(app).get(URL)

    expect(response.status).toBe(200)
  })
})
