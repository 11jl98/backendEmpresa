import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserslValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	  login: schema.string({trim: true}, [rules.unique({table:'users', column:'login'})]),
	  password: schema.string({trim:true}, [rules.minLength(8)])
  })

  public messages = {}
}
