// filtro por nome e telefone de broker
// comemissoes /  maior -> menor

import { Broker } from '@repo/database'

// leads / maior -> menor
export const getBrokerController = async (): Promise<Broker[]> => {
  const brokers = await Broker.query()
    .select()
    .withGraphFetched('leads')
    .withGraphFetched('comissions')

  return brokers
}
