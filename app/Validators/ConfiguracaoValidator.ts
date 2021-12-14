import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ConfiguracaoValidator {
  constructor (protected ctx: HttpContextContract) {
  }
  public schema = schema.create({
	modeloreceita: schema.string({ trim: true }),
	estoquenegativo: schema.string({ trim: true }),
	quantidadeprodutoreceita: schema.number(),
  })

  public messages = {}
}
