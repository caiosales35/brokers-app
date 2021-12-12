import Joi from 'joi'
import { QsBrokersParams } from './types'

export const checkBrokerSearchParams = async (
  searchParams: QsBrokersParams
) => {
  const formatedBrokerSearchParams = formatBrokerSearchParams(searchParams)
  await brokerSearchParams.validateAsync(formatedBrokerSearchParams)
}

const formatBrokerSearchParams = (
  searchParams: QsBrokersParams
): QsBrokersParams => {
  if (searchParams.phone) {
    return { ...searchParams, phone: String(searchParams.phone) }
  }
  return searchParams
}

export const brokerSearchParams = Joi.object({
  name: Joi.string(),
  phone: Joi.string()
})
