import { Request } from 'express'

export type QsRequest = Request & {
  query: {
    pagination: {
      skip: number | string
      limit: number | string
    }
  }
}
