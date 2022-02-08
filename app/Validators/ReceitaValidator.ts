import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
class ReceitaValidatorStore {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		id_cliente: schema.string(),
		id_propriedade: schema.string(),
		id_responsavel: schema.string(),
		numeroreceita:schema.string({trim: true}),
		numeroart:schema.string({trim: true}),
		data:schema.string({trim: true}),
		statusreceita:schema.string.optional({trim: true}),
		observacao:schema.string.optional({trim: true}),
		obsmip:schema.string.optional({trim: true}),
		notafiscal:schema.string({trim: true}),
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
		contrato: schema.string.optional({trim: true}),
		nomecliente:schema.string.optional({trim: true}),
		nomeresponsavel:schema.string.optional({trim: true}),
  })

	public messages = {
		'id_cliente.required':'Selecione um cliente para prosseguir',
		'id_propriedade.required': 'Selecione uma propriedade para prosseguir',
		'id_responsavel.required': 'Selecione uma responsável para prosseguir',
		'numeroreceita.required': 'número da receita é obrigatório',
		'numeroart.required':'número de ART para prosseguir',
		'data.required':'data não foi preenchida',
		'notafiscal.required':'número de nota fiscal é obrigatório',
		'serie.required':'número de série é obrigatório',
		'complementoreceita.required':'complemento da receita é obrigatório',
		'datanfe.required':'data da NF-e não foi preenchida',
	}
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
		statusreceita:schema.string.optional({trim: true}),
		observacao:schema.string.optional({trim: true}),
		obsmip:schema.string.optional({trim: true}),
		notafiscal:schema.string({trim: true}),
		serie:schema.string({trim: true}),
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
		contrato: schema.string.optional({trim: true}),
		nomecliente:schema.string.optional({trim: true}),
		nomeresponsavel:schema.string.optional({trim: true}),
  })

	public messages = {
		'id_cliente.required':'Selecione um cliente para prosseguir',
		'id_propriedade.required': 'Selecione uma propriedade para prosseguir',
		'id_responsavel.required': 'Selecione uma responsável para prosseguir',
		'numeroreceita.required': 'número da receita é obrigatório',
		'numeroart.required':'número de ART para prosseguir',
		'data.required':'data não foi preenchida',
		'notafiscal.required':'número de nota fiscal é obrigatório',
		'serie.required':'número de série é obrigatório',
		'complementoreceita.required':'complemento da receita é obrigatório',
		'datanfe.required':'data da NF-e não foi preenchida',
	}
}

export default {ReceitaValidatorStore, ReceitaValidatorUpdate}