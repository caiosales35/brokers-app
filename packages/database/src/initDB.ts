import Knex from 'knex'
import { Model } from 'objection'
import knexfile from './knexfile'

export default () => {
  const knex = Knex(knexfile)
  Model.knex(knex)
  return knex
}
