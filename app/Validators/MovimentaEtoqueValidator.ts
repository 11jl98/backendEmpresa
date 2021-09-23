import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MovimentaEtoqueValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	 id_fornecedor:schema.string(),
	 data: schema.date({format: 'dd-MM-yyyy'}),
	 datavencimento:schema.date.optional({format: 'dd-MM-yyyy'}),
	 datanfe:schema.date.optional({format: 'dd-MM-yyyy'}),
	 embalagemindea:schema.string.optional({trim: true}),
	 enviado:schema.string.optional({trim: true}),
	 nomeagrotoxico:schema.string({trim: true}),
	 nomeembalagem:schema.string({trim: true}),
	 tipoembalagem:schema.string({trim: true}),
	 unidademmbalagem:schema.string({trim: true}),
	 nomeresponsaveltecnico:schema.string({trim: true}),
	 tipomovimentacao:schema.string({trim: true}),
	 json:schema.string.optional({trim: true}),
	 notafiscal:schema.string({trim: true}),
	 numlote:schema.string.optional({trim: true}),
	 observacao:schema.string({trim: true}),
	 quantidade:schema.number(),
	 receita:schema.string.optional({trim: true}),
	 registroagrotox:schema.string({trim: true}),
	 serie:schema.string({trim: true}), 
	 statussc:schema.string.optional({trim: true})
  })

  public messages = {}
}
