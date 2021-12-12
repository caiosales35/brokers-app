import request from 'supertest'
import app from '../../app'

const URL = '/api/v1/broker'

describe('Get Broker test', () => {
  it('Should return 200 at get Brokers endpoint', async () => {
    const response = await request(app).get(URL)
    expect(response.status).toBe(200)
  })
  it('Should return 200 at get Brokers endpoint with pagination params', async () => {
    const paginatedURL = `${URL}?skip=1&limit=10`

    const response = await request(app).get(paginatedURL)
    expect(response.status).toBe(200)
  })
})
