import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MovimentaEtoqueValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	 idFornecedor:schema.number(),
	 data: schema.date(),
	 datavencimento:schema.date(),
	 datanfe:schema.date(),
	 dentroestado:schema.string({trim: true}),
	 embalagemindea:schema.string({trim: true}),
	 enviado:schema.string({trim: true}),
	 nomeagrotoxico:schema.string({trim: true}),
	 nomeembalagem:schema.string({trim: true}),
	 tipoembalagem:schema.string({trim: true}),
	 unidademmbalagem:schema.string({trim: true}),
	 nomeresponsaveltecnico:schema.string({trim: true}),
	 tipomovimentacao:schema.string({trim: true}),
	 json:schema.string({trim: true}),
	 naturezaoperacao:schema.string({trim: true}),
	 notafiscal:schema.string({trim: true}),
	 numlote:schema.string({trim: true}),
	 observacao:schema.string({trim: true}),
	 quantidade:schema.number(),
	 receita:schema.string({trim: true}),
	 registroagrotox:schema.string({trim: true}),
	 serie:schema.string({trim: true}), 
	 statussc:schema.string({trim: true})
  })

  public messages = {}
}
