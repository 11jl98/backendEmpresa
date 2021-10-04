import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
class ReceitaValidatorStore {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		id_cliente: schema.string.optional(),
		id_propriedade: schema.string.optional(),
		id_responsavel: schema.string.optional(),
		numeroreceita:schema.string.optional({trim: true}),
		numeroart:schema.string.optional({trim: true}),
		data:schema.string.optional({trim: true}),
		statusreceita:schema.string.optional({trim: true}),
		observacao:schema.string.optional({trim: true}),
		obsmip:schema.string.optional({trim: true}),
		notafiscal:schema.string.optional({trim: true}),
		serie:schema.string.optional({trim: true}),
		valor:schema.string.optional({trim: true}),
		datafinal:schema.string.optional({trim: true}),
		statussc:schema.string.optional({trim: true}),
		jsonsc:schema.string.optional({trim: true}),
		codretsc:schema.string.optional({trim: true}),
		enviado:schema.string.optional({trim: true}),
		devolucao:schema.string.optional({trim: true}),
		cogoias:schema.string.optional({trim: true}),
		seriesc:schema.string.optional({trim: true}),
		complementoreceita:schema.string({trim: true}),
		chavenfe:schema.string.optional({trim: true}),
		datanfe:schema.string({trim: true}),
		protocolors:schema.string.optional({trim: true}),
		protocolocancelamentors:schema.string.optional({trim: true}),
		contrato: schema.string.optional({trim: true})
  })

	public messages = {}
}
class ReceitaValidatorUpdate {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		id_cliente: schema.string(),
		id_propriedade: schema.string(),
		id_responsavel: schema.string(),
		numeroreceita:schema.string({trim: true}),
		numeroart:schema.string({trim: true}),
		data:schema.string({trim: true}),
		nome:schema.string({trim: true}),
		statusreceita:schema.string({trim: true}),
		observacao:schema.string({trim: true}),
		obsmip:schema.string({trim: true}),
		notafiscal:schema.string({trim: true}),
		serie:schema.string({trim: true}),
		valor:schema.string.optional({trim: true}),
		datafinal:schema.string({trim: true}),
		statussc:schema.string.optional({trim: true}),
		jsonsc:schema.string.optional({trim: true}),
		codretsc:schema.string.optional({trim: true}),
		enviado:schema.string.optional({trim: true}),
		devolucao:schema.string.optional({trim: true}),
		cogoias:schema.string.optional({trim: true}),
		seriesc:schema.string.optional({trim: true}),
		complementoreceita:schema.string({trim: true}),
		chavenfe:schema.string.optional({trim: true}),
		datanfe:schema.string({trim: true}),
		protocolors:schema.string.optional({trim: true}),
		protocolocancelamentors:schema.string.optional({trim: true}),
		contrato: schema.string.optional({trim: true})
  })

	public messages = {}
}

export default {ReceitaValidatorStore, ReceitaValidatorUpdate}