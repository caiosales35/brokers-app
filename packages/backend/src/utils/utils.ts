import Joi from 'joi'
import { QsBrokersParams } from './types'

export const checkBrokerSearchParams = async (
  searchParams: QsBrokersParams
): Promise<void> => {
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

export const handleRawSqlToGetBrokersOrderByLeads = (
  searchParams: QsBrokersParams,
  page: number,
  pageSize: number
): string => {
  if (searchParams.name) {
    return `select * from "user" inner join (select count(*) as leads, broker_key from lead
              group by lead.broker_key ) as leads on leads.broker_key = "user".key
              where "user".name = '${searchParams.name}'
              order by leads desc limit ${pageSize} offset ${page * pageSize};`
  } else if (searchParams.phone) {
    return `select * from "user" inner join (select count(*) as leads, broker_key from lead
              group by lead.broker_key ) as leads on leads.broker_key = "user".key
              where "user".phone = '${searchParams.phone}'
              order by leads desc limit ${pageSize} offset ${page * pageSize};`
  } else if (searchParams.phone && searchParams.name) {
    return `select * from "user" inner join (select count(*) as leads, broker_key from lead
              group by lead.broker_key ) as leads on leads.broker_key = "user".key
              where "user".name = '${searchParams.name}' and 
              "user".phone = '${searchParams.phone}' 
              order by leads desc limit ${pageSize} offset ${page * pageSize};`
  }
  return `select * from "user" inner join (select count(*) as leads, broker_key from lead
            group by lead.broker_key ) as leads on leads.broker_key = "user".key
            order by leads desc limit ${pageSize} offset ${page * pageSize};`
}

export const handleRawSqlToGetBrokersOrderByComissionValue = (
  searchParams: QsBrokersParams,
  page: number,
  pageSize: number
): string => {
  if (searchParams.name) {
    return `select "user".*, comission.value, comission.property_code, comission.key as comission_key from "user"
              inner join comission on "user".key = comission.user_key
              where "user".name = '${searchParams.name}' 
              order by comission.value desc 
              limit ${pageSize} offset ${page * pageSize};`
  } else if (searchParams.phone) {
    return `select "user".*, comission.value, comission.property_code, comission.key as comission_key from "user"
              inner join comission on "user".key = comission.user_key
              where "user".phone = '${searchParams.phone}'
              order by comission.value desc 
              limit ${pageSize} offset ${page * pageSize};`
  } else if (searchParams.phone && searchParams.name) {
    return `select "user".*, comission.value, comission.property_code, comission.key as comission_key from "user"
              inner join comission on "user".key = comission.user_key
              where "user".name = '${searchParams.name}' and 
              "user".phone = '${searchParams.phone}' 
              order by comission.value desc 
              limit ${pageSize} offset ${page * pageSize};`
  }
  return `select "user".*, comission.value, comission.property_code, comission.key as comission_key from "user"
           inner join comission on "user".key = comission.user_key
           order by comission.value desc limit ${pageSize} 
           offset ${page * pageSize};`
}
