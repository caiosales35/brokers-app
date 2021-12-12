import { database } from '../app'
import { QsBrokersParams, QsRequest } from '../utils/types'
import {
  checkBrokerSearchParams,
  handleRawSqlToGetBrokersOrderByLeads
} from '../utils/utils'

// quantidade de leads / maior -> menor
// valor de comissoes /  maior -> menor

export const getBrokersOrderByLeadsController = async (req: QsRequest) => {
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
) => {
  const rawSql = handleRawSqlToGetBrokersOrderByLeads(params, page, pageSize)
  const rawBrokers = await database.raw(rawSql)
  const brokers = rawBrokers // TODO: funcation to parse to type like Brokers..
  return brokers
}
