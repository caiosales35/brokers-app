import request from 'supertest'
import app from '../../app'

const URL = '/api/v1/broker/lead'

describe('Get Broker order by Leads test', () => {
  it('Should return 200 at get Brokers order by Lead endpoint', async () => {
    const response = await request(app).get(URL)
    expect(response.status).toBe(200)
  })
  it('Should return 200 with pagination params, without search params', async () => {
    const paginatedURL = `${URL}?skip=1&limit=10`

    const response = await request(app).get(paginatedURL)
    expect(response.status).toBe(200)
  })
  it('Should return 200 with name search param and pagination params', async () => {
    const paginatedURL = `${URL}?name=test&skip=1&limit=10`

    const response = await request(app).get(paginatedURL)
    expect(response.status).toBe(200)
  })
  it('Should return 200 with phone search param and pagination params', async () => {
    const paginatedURL = `${URL}?phone=6532315&skip=1&limit=10`

    const response = await request(app).get(paginatedURL)
    expect(response.status).toBe(200)
  })
  it('Should return 200 with name and phone search params, and pagination params', async () => {
    const paginatedURL = `${URL}?name=test&phone=6532315&skip=1&limit=10`

    const response = await request(app).get(paginatedURL)
    expect(response.status).toBe(200)
  })
  it('Should return 500 with now allowed search param, with pagination params', async () => {
    const paginatedURL = `${URL}?id=1&phone=6532315&skip=1&limit=10`

    const response = await request(app).get(paginatedURL)
    expect(response.status).toBe(500)
  })
})
