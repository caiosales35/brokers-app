import { database } from '../app'
import {
  BrokerWithComissionValue,
  QsBrokersParams,
  QsRequest
} from '../utils/types'
import {
  checkBrokerSearchParams,
  handleRawSqlToGetBrokersOrderByComissionValue
} from '../utils/utils'

export const getBrokersOrderByComissionValueController = async (
  req: QsRequest
): Promise<BrokerWithComissionValue[]> => {
  const { skip, limit } = req.query?.pagination
  const searchParams: QsBrokersParams = req.query?.filters

  await checkBrokerSearchParams(searchParams)
  return paginatedGetBrokersOrderByComissionValue(
    searchParams,
    Number(skip),
    Number(limit)
  )
}

const paginatedGetBrokersOrderByComissionValue = async (
  params: QsBrokersParams,
  page: number,
  pageSize: number
): Promise<BrokerWithComissionValue[]> => {
  const rawSql = handleRawSqlToGetBrokersOrderByComissionValue(
    params,
    page,
    pageSize
  )
  const rawBrokers = await database.raw(rawSql)
  const brokers: BrokerWithComissionValue[] = rawBrokers.rows || []
  return brokers
}
