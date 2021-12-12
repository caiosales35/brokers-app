import { AnySchema } from 'joi'
import { Model, Validator } from 'objection'

class MyCustomValidator extends Validator {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate (args: any) {
    // The model instance. May be empty at this point.
    const joiSchema: AnySchema = args.model.joiSchema

    // The properties to validate. After validation these values will
    // be merged into `model` by objection.
    const json = args.json

    // `ModelOptions` object. If your custom validator sets default
    // values or has the concept of required properties, you need to
    // check the `opt.patch` boolean. If it is true we are validating
    // a patch object (an object with a subset of model's properties).
    const opt = args.options

    let schemaToValidate: AnySchema
    if (joiSchema && opt.patch) {
      const allKeys = Object.keys(joiSchema.describe().keys)
      schemaToValidate = joiSchema.fork(allKeys, schema => schema.optional())
    } else {
      schemaToValidate = joiSchema
    }

    // Do your validation here and throw any exception if the
    // validation fails.
    if (schemaToValidate) {
      const data = schemaToValidate.validate(json, { stripUnknown: true })

      if (data.error) {
        throw data.error
      }
    }

    // You need to return the (possibly modified) json.
    return json
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  beforeValidate (args: any): void {
    // Takes the same arguments as `validate`. Usually there is no need
    // to override this.
    return super.beforeValidate(args)
  }
}

export default class BaseModel extends Model {
  static joiSchema: AnySchema

  static createValidator (): Validator {
    return new MyCustomValidator()
  }

  static get schemaFields (): string[] | null {
    if (this.joiSchema) {
      return Object.keys(this.joiSchema.describe().keys)
    } else if (this.jsonSchema) {
      return Object.keys(this.jsonSchema.properties || {})
    } else return null
  }
}
