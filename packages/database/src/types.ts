import Model from './models/BaseModel'

/**
 * A Pojo version of Objection model. Basically it will strip all Objection Model
 * attributes from the given model type.
 */
export type ModelObject<T extends Model> = Omit<T, keyof Model>
