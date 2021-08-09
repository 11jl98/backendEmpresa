import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class RetornoEmbalagenValidatorStore {
  constructor (protected ctx: HttpContextContract) {
	
  }
  public schema = schema.create({
	id_cliente: schema.string(),
	data:schema.date(),
	embdevolvidas:schema.number(),
	nomecliente:schema.string({trim: true}),
	nomeembalagem:schema.string({trim: true}),
	nomeagrotoxico:schema.string({trim: true}),
	registroagrotoxico:schema.string({trim: true}),
	numeronf:schema.number(),
	numeroreceita:schema.string({trim: true}),
	quantidadesaida:schema.number(),
	observacao: schema.string({trim: true}),
  })

  public messages = {}
}

class RetornoEmbalagenValidatorUpdate {
	constructor (protected ctx: HttpContextContract) {
	}
	public schema = schema.create({
		idid_cliente: schema.number(),
		data:schema.date(),
		embdevolvidas:schema.number(),
		nomecliente:schema.string({trim: true}),
		nomeembalagem:schema.string({trim: true}),
		nomeagrotoxico:schema.string({trim: true}),
		registroagrotoxico:schema.string({trim: true}),
		numeronf:schema.number(),
		numeroreceita:schema.string({trim: true}),
		quantidadesaida:schema.number(),
		observacao: schema.string({trim: true}),
	  })
  
	public messages = {}
  }

export default {RetornoEmbalagenValidatorStore, RetornoEmbalagenValidatorUpdate}