import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoteValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	numlote:schema.string({trim: true}, [rules.unique({table:'lotes', column: 'numlote'})]), 
	observacao: schema.string.optional({trim: true})

  })

  public messages = {}
}
