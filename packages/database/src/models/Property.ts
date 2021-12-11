import Joi from 'joi'
import { Model } from 'objection'
import Comission from './Comission'

export default class Property extends Model {
  static tableName = 'property'

  key?: number
  code?: string
  name?: string
  createdAt?: string
  comissions?: Comission[]

  static joiSchema = Joi.object().keys({
    key: Joi.number().integer(),
    code: Joi.string().max(5).messages({
      'any.required': 'O codigo é obrigatório.',
      'string.empty': 'O codigo é obrigatório.',
      'string.max': 'O codigo deve conter no máximo 5 caracteres.'
    }),
    name: Joi.string().max(255).messages({
      'any.required': 'O nome é obrigatório.',
      'string.empty': 'O nome é obrigatório.',
      'string.base': 'O nome deve ser um campo de texto.',
      'string.max': 'O nome deve conter no máximo 255 caracteres.'
    }),
    createdAt: Joi.date()
  })

  static get relationMappings () {
    return {
      comissions: {
        relation: Model.HasManyRelation,
        modelClass: Comission,
        join: {
          from: 'property.code',
          to: 'comission.property_code'
        }
      }
    }
  }
}
