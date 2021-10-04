import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MovimentaEtoqueValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	 id_fornecedor:schema.string.optional(),
	 id_infortecnica:schema.string.optional(),
	 embalagemindea:schema.string.optional({trim: true}),
	 enviado:schema.string.optional({trim: true}),
	 nomeagrotoxico:schema.string({trim: true}),
	 id_agrotoxico:schema.number(),
	 nomeembalagem:schema.string({trim: true}),
	 tipoembalagem:schema.number(),
	 unidademmbalagem:schema.string({trim: true}),
	 id_embalagem:schema.number.optional(),
	 nomeresponsaveltecnico:schema.string({trim: true}),
	 tipomovimentacao:schema.string({trim: true}),
	 json:schema.string.optional({trim: true}),
	 notafiscal:schema.string({trim: true}),
	 numlote:schema.string.optional({trim: true}),
	 observacao:schema.string.optional({trim: true}),
	 quantidade:schema.number(),
	 receita:schema.string.optional({trim: true}),
	 registroagrotox:schema.string({trim: true}),
	 serie:schema.string({trim: true}), 
	 statussc:schema.string.optional({trim: true})
  })

  public messages = {}
}
