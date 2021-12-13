import { database } from '../app'
import { BrokerWithLeadCount, QsBrokersParams, QsRequest } from '../utils/types'
import {
  checkBrokerSearchParams,
  handleRawSqlToGetBrokersOrderByLeads
} from '../utils/utils'

export const getBrokersOrderByLeadsController = async (
  req: QsRequest
): Promise<BrokerWithLeadCount[]> => {
  const { skip, limit } = req.query?.pagination
  const searchParams: QsBrokersParams = req.query?.filters

  await checkBrokerSearchParams(searchParams)
  return paginatedGetBrokersOrderByLeads(
    searchParams,
    Number(skip),
    Number(limit)
  )
}

const paginatedGetBrokersOrderByLeads = async (
  params: QsBrokersParams,
  page: number,
  pageSize: number
): Promise<BrokerWithLeadCount[]> => {
  const rawSql = handleRawSqlToGetBrokersOrderByLeads(params, page, pageSize)
  const rawBrokers = await database.raw(rawSql)
  const brokers: BrokerWithLeadCount[] = rawBrokers.rows || []
  return brokers
}
