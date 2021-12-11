import Joi from 'joi'
import { Model } from 'objection'
import Comission from './Comission'

export default class Property extends Model {
  static tableName = 'property'

  key?: number
  code?: string
  title?: string
  // eslint-disable-next-line camelcase
  sale_price?: string
  type?: 'CASA_DE_VILA' | 'CAVERNA' | 'PALAFITA' | 'APARTAMENTO' | 'CASA'
  // eslint-disable-next-line camelcase
  lead_key?: number
  createdAt?: string
  comissions?: Comission[]

  static joiSchema = Joi.object().keys({
    key: Joi.number().integer(),
    code: Joi.string().max(5).messages({
      'any.required': 'O codigo é obrigatório.',
      'string.empty': 'O codigo é obrigatório.',
      'string.max': 'O codigo deve conter no máximo 5 caracteres.'
    }),
    title: Joi.string().max(255).messages({
      'any.required': 'O nome é obrigatório.',
      'string.empty': 'O nome é obrigatório.',
      'string.base': 'O nome deve ser um campo de texto.',
      'string.max': 'O nome deve conter no máximo 255 caracteres.'
    }),
    sale_price: Joi.string().max(255).pattern(new RegExp('^[0-9]+$')).messages({
      'any.required': 'O valor é obrigatório.',
      'string.empty': 'O valor é obrigatório.',
      'string.base': 'O valor deve conter apenas números.',
      'string.max': 'O valor deve conter no máximo 255 caracteres.'
    }),
    type: Joi.string()
      .valid('CASA_DE_VILA', 'CAVERNA', 'PALAFITA', 'APARTAMENTO', 'CASA')
      .messages({
        'string.valid':
          'O tipo deve ser "CASA_DE_VILA", "CAVERNA", "PALAFITA", "APARTAMENTO" ou "CASA".'
      }),
    lead_key: Joi.number(),
    createdAt: Joi.date()
  })

  static get relationMappings() {
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
