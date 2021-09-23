import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
class PropriedadeValidatorStore {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		id_cliente: schema.string({}),
		nomepropriedade: schema.string({trim: true}),
		cpfcnpj:schema.string({trim: true},[rules.minLength(11), rules.maxLength(25)]),
		iepr: schema.string({trim: true}),
		rgie:schema.string({trim: true}),
		endereco: schema.string({trim: true}),
		bairro: schema.string({trim: true}),
		numero: schema.string({trim: true}),
		cidade: schema.string({trim: true}),
		uf: schema.string({trim: true}),
		cep: schema.string({trim: true}),
		latitude: schema.string({trim: true}),
		longitude: schema.string({trim: true}),
	})

	public messages = {}
}
class PropriedadeValidatorUpdate {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		id_cliente: schema.string({}),
		nomepropriedade: schema.string({trim: true}),
		cpfcnpj:schema.string({trim: true}),
		iepr: schema.string({trim: true}),
		rgie:schema.string({trim: true}),
		endereco: schema.string({trim: true}),
		bairro: schema.string({trim: true}),
		numero: schema.string({trim: true}),
		cidade: schema.string({trim: true}),
		uf: schema.string({trim: true}),
		cep: schema.string({trim: true}),
		latitude: schema.string({trim: true}),
		longitude: schema.string({trim: true}),
	})

	public messages = {}
}

export default {PropriedadeValidatorStore, PropriedadeValidatorUpdate}