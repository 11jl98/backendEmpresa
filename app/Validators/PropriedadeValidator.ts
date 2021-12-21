import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
class PropriedadeValidatorStore {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		id_cliente: schema.string({}),
		nomepropriedade: schema.string({trim: true}),
		cpfcnpj:schema.string.optional({trim: true},[rules.minLength(14), rules.maxLength(18)]),
		iepr: schema.string.optional({trim: true}),
		rgie:schema.string.optional({trim: true}),
		endereco: schema.string({trim: true}),
		bairro: schema.string({trim: true}),
		numero: schema.string({trim: true}),
		cidade: schema.string({trim: true}),
		uf: schema.string({trim: true}),
		cep: schema.string({trim: true}),
		latitude: schema.string.optional({trim: true}),
		longitude: schema.string.optional({trim: true}),
		codibge:schema.string.optional({trim: true})

	})

	public messages = {
	'id_cliente.required':'É necessário um cliente selecionado',
	'nomepropriedade.required':'Nome da propriedade não pode ficar em branco',
	'endereco.required':'Endereço não pode ficar em branco',
	'bairro.required':'Bairro não pode ficar em branco',
	'numero.required':'Numero não pode ficar em branco',
	'cidade.required':'Cidade não pode ficar em branco',
	'uf.required':'UF não pode ficar em branco',
	'cep.required':'CEP não pode ficar em branco',
	}
}
class PropriedadeValidatorUpdate {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		id_cliente: schema.string({}),
		nomepropriedade: schema.string({trim: true}),
		cpfcnpj:schema.string.optional({trim: true},[rules.minLength(14), rules.maxLength(18)]),
		iepr: schema.string.optional({trim: true}),
		rgie:schema.string.optional({trim: true}),
		endereco: schema.string({trim: true}),
		bairro: schema.string({trim: true}),
		numero: schema.string({trim: true}),
		cidade: schema.string({trim: true}),
		uf: schema.string({trim: true}),
		cep: schema.string({trim: true}),
		latitude: schema.string.optional({trim: true}),
		longitude: schema.string.optional({trim: true}),
		codibge:schema.string.optional({trim: true})

	})

	public messages = {
		'id_cliente.required':'É necessário um cliente selecionado',
		'nomepropriedade.required':'Nome da propriedade não pode ficar em branco',
		'endereco.required':'Endereço não pode ficar em branco',
		'bairro.required':'Bairro não pode ficar em branco',
		'numero.required':'Numero não pode ficar em branco',
		'cidade.required':'Cidade não pode ficar em branco',
		'uf.required':'UF não pode ficar em branco',
		'cep.required':'CEP não pode ficar em branco',
	}
}

export default {PropriedadeValidatorStore, PropriedadeValidatorUpdate}