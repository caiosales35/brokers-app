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

export type BrokerWithLeadCount = {
  key?: string
  name?: string
  email?: string
  // eslint-disable-next-line camelcase
  int_code?: string
  phone?: string
  createdAt?: string
  leads?: string
  // eslint-disable-next-line camelcase
  broker_key?: string
}

export type BrokerWithComissionValue = {
  key?: string
  name?: string
  email?: string
  // eslint-disable-next-line camelcase
  int_code?: string
  phone?: string
  createdAt?: string
  value?: number
  // eslint-disable-next-line camelcase
  property_code?: string
}
