import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class LoteValidatorStore {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	numlote:schema.string({trim: true}, [rules.unique({table:'lotes', column: 'numlote'})]), 
	observacao: schema.string.optional({trim: true})

  })

  public messages = {}
}
class LoteValidatorUpdate {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	numlote:schema.string({trim: true}, [rules.unique({table:'lotes', column: 'numlote'})]), 
	observacao: schema.string.optional({trim: true})

  })

  public messages = {}
}

export default {LoteValidatorStore, LoteValidatorUpdate}