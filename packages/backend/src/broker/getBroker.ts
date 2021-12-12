// filtro por nome e telefone de broker
// comemissoes /  maior -> menor

import { Lead } from '@repo/database'

// leads / maior -> menor
export const getBrokerController = async () => {
  const brokers = await Lead.query().select()
  console.log(brokers)

  return { oi: 'ou' }
}
