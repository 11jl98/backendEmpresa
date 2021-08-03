import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PropriedadeValidator {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		id_cliente: schema.number(),
		nomepropriedade: schema.string({trim: true}),
		endereco: schema.string({trim: true}),
		bairro: schema.string({trim: true}),
		numero: schema.string({trim: true}),
		cidade: schema.string({trim: true}),
		UF: schema.string({trim: true}),
		cep: schema.string({trim: true}),
		cnpj:schema.string({trim: true},[rules.minLength(11), rules.maxLength(25), rules.unique({table:'clientes', column: 'cpfcnpj'})]),
		email:schema.string({trim: true}, [rules.email()]),
		latitude: schema.string({trim: true}),
		longitude: schema.string({trim: true}),
		telefone: schema.string({trim: true}),
		iepr: schema.string({trim: true}, [rules.maxLength(11), rules.unique({table:'clientes', column: 'cpfcnpj'})])
	})

	public messages = {}
}
