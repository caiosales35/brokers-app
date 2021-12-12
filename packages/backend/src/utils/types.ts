import { Request } from 'express'

export type QsRequest = Request & {
  query: {
    filters: QsBrokersParams
    pagination: {
      skip: number | string
      limit: number | string
    }
  }
}

export type QsBrokersParams = {
  name?: string
  phone?: string
}
