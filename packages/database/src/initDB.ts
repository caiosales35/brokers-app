import Knex from 'knex'
import { Model } from 'objection'
import knexConfig from './knexfile'

export default () => {
  const knex = Knex(knexConfig)
  Model.knex(knex)
  return knex
}
