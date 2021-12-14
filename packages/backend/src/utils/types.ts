/* eslint-disable camelcase */
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
  int_code?: string
  phone?: string
  createdAt?: string
  leads?: string
  broker_key?: string
}

export type BrokerWithComissionValue = {
  key?: string
  name?: string
  email?: string
  int_code?: string
  phone?: string
  createdAt?: string
  value?: number
  property_code?: string
  comission_key?: string
}
