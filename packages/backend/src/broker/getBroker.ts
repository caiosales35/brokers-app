import { Broker } from '@repo/database'
import { Page } from 'objection'
import { QsBrokersParams, QsRequest } from '../utils/types'
import { checkBrokerSearchParams } from '../utils/utils'

// leads / maior -> menor
// filtro por nome e telefone de broker
// comemissoes /  maior -> menor

/* ex: /broker?skip=0&limit=10 */
/* ex1: /broker?name=joao&skip=0&limit=10 */
/* ex2: /broker?name=joao&phone=984532515&skip=0&limit=10 */
export const getBrokerController = async (
  req: QsRequest
): Promise<Page<Broker>> => {
  const { skip, limit } = req.query?.pagination
  const searchParams: QsBrokersParams = req.query?.filters

  if (searchParams) {
    return getBrokersByNameAndPhonePaginated(
      searchParams,
      Number(skip),
      Number(limit)
    )
  } else {
    return paginatedGetBrokers(Number(skip), Number(limit))
  }
}

const getBrokersByNameAndPhonePaginated = async (
  searchParams: QsBrokersParams,
  page: number,
  pageSize: number
) => {
  await checkBrokerSearchParams(searchParams)
  return findBrokersByNameAndPhonePaginated(searchParams, page, pageSize)
}

const findBrokersByNameAndPhonePaginated = async (
  params: QsBrokersParams,
  page: number,
  pageSize: number
) => {
  const brokers = await Broker.query()
    .where(params)
    .withGraphFetched('leads')
    .withGraphFetched('comissions')
    .page(page, pageSize)
  return brokers
}

const paginatedGetBrokers = async (page: number, pageSize: number) => {
  const brokers = await Broker.query()
    .select()
    .withGraphFetched('leads')
    .withGraphFetched('comissions')
    .page(page, pageSize)
  return brokers
}
