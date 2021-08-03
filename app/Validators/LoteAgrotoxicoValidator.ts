import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoteAgrotoxicoValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	id_lote:schema.number(),
	id_agrotoxico:schema.string({trim: true}),
	nomeagrotoxico:schema.string({trim: true}),
	numlote:schema.string({trim: true})
  })

  public messages = {}
}
