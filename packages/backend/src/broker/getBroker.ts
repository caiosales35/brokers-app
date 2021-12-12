import { Broker } from '@repo/database'
import { Page } from 'objection'
import { QsRequest } from '../utils/types'

// leads / maior -> menor
// filtro por nome e telefone de broker
// comemissoes /  maior -> menor
export const getBrokerController = async (
  req: QsRequest
): Promise<Page<Broker>> => {
  const { skip, limit } = req.query?.pagination

  const brokers = await Broker.query()
    .select()
    .withGraphFetched('leads')
    .withGraphFetched('comissions')
    .page(Number(skip), Number(limit))

  return brokers
}
