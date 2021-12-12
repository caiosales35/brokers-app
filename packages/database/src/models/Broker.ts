import Joi from 'joi'
import { Model } from 'objection'
import Comission from './Comission'

export default class Broker extends Model {
  static tableName = 'user'

  key?: number
  name?: string
  email?: string
  // eslint-disable-next-line camelcase
  int_code?: string
  phone?: string
  createdAt?: string
  comissions?: Comission[]

  static joiSchema = Joi.object().keys({
    key: Joi.number().integer(),
    name: Joi.string().max(255).messages({
      'any.required': 'O nome é obrigatório.',
      'string.empty': 'O nome é obrigatório.',
      'string.base': 'O nome deve ser um campo de texto.',
      'string.max': 'O nome deve conter no máximo 255 caracteres.'
    }),
    email: Joi.string().max(255).messages({
      'any.required': 'O email é obrigatório.',
      'string.empty': 'O email é obrigatório.',
      'string.base': 'O email deve ser um campo de texto.',
      'string.max': 'O email deve conter no máximo 255 caracteres.'
    }),
    int_code: Joi.string().max(255).messages({
      'any.required': 'O codigo do país é obrigatório.',
      'string.empty': 'O codigo do país é obrigatório.',
      'string.base': 'O codigo do país deve ser um campo de texto.',
      'string.max': 'O codigo do país deve conter no máximo 4 caracteres.'
    }),
    phone: Joi.string().max(255).messages({
      'any.required': 'O telefone é obrigatório.',
      'string.empty': 'O telefone é obrigatório.',
      'string.base': 'O telefone deve ser um campo de texto.',
      'string.max': 'O telefone deve conter no máximo 4 caracteres.'
    }),
    createdAt: Joi.date()
  })

  static get relationMappings() {
    return {
      comissions: {
        relation: Model.HasManyRelation,
        modelClass: Comission,
        join: {
          from: 'user.key',
          to: 'comission.user_key'
        }
      }
    }
  }
}
