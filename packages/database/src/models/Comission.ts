import Joi from 'joi'
import { Model } from 'objection'
import Property from './Property'
import User from './User'

export default class Comission extends Model {
  static tableName = 'comission'

  key?: number
  value?: string
  date?: string
  // eslint-disable-next-line camelcase
  user_key?: string
  // eslint-disable-next-line camelcase
  property_code?: string
  createdAt?: string
  user?: User
  property?: Property

  static joiSchema = Joi.object().keys({
    key: Joi.number().integer(),
    value: Joi.string().max(255).pattern(new RegExp('^[0-9]+$')).messages({
      'any.required': 'O valor é obrigatório.',
      'string.empty': 'O valor é obrigatório.',
      'string.base': 'O valor deve conter apenas números.',
      'string.max': 'O valor deve conter no máximo 255 caracteres.'
    }),
    date: Joi.date(),
    user_key: Joi.string().max(4),
    property_code: Joi.string().max(5),
    createdAt: Joi.date()
  })

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'comission.user_key',
          to: 'user.key'
        }
      },
      property: {
        relation: Model.BelongsToOneRelation,
        modelClass: Property,
        join: {
          from: 'comission.property_code',
          to: 'property.code'
        }
      }
    }
  }
}
