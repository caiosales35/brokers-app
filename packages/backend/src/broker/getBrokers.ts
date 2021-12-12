import { Broker } from '@repo/database'
import { Page } from 'objection'
import { QsBrokersParams, QsRequest } from '../utils/types'
import { checkBrokerSearchParams } from '../utils/utils'

/* ex: /broker?skip=0&limit=10 */
/* ex1: /broker?name=joao&skip=0&limit=10 */
/* ex2: /broker?name=joao&phone=984532515&skip=0&limit=10 */
export const getBrokersController = async (
  req: QsRequest
): Promise<Page<Broker>> => {
  const { skip, limit } = req.query?.pagination
  const searchParams: QsBrokersParams = req.query?.filters

  await checkBrokerSearchParams(searchParams)
  return getBrokersByNameAndPhonePaginated(
    searchParams,
    Number(skip),
    Number(limit)
  )
}

const getBrokersByNameAndPhonePaginated = async (
  params: QsBrokersParams,
  page: number,
  pageSize: number
) => {
  const brokers = await Broker.query()
    .where(params)
    .orderBy('name')
    .withGraphFetched('leads')
    .withGraphFetched('comissions')
    .page(page, pageSize)
  return brokers
}
