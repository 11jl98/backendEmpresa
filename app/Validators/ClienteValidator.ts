import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class ClienteValidatorStore {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		nome: schema.string({ trim: true }),
		cpfcnpj: schema.string({ trim: true }, [rules.minLength(13), rules.maxLength(18), rules.unique({ table: 'clientes', column: 'cpfcnpj' })]),
		endereco: schema.string({ trim: true }),
		bairro: schema.string({ trim: true }),
		numero: schema.string({ trim: true }),
		cidade: schema.string({ trim: true }),
		uf: schema.string({ trim: true }),
		cep: schema.string({ trim: true }),
		telefone: schema.string({ trim: true }, [rules.maxLength(15)]),
		email: schema.string({ trim: true }, [rules.email()]),
		iepr: schema.string({ trim: true }),
		observacao: schema.string.optional({ trim: true }),
		rgie: schema.string({ trim: true }),
		status: schema.string.optional({ trim: true }),
		codibge: schema.string({ trim: true })

	})
	public messages = {}
}
class ClienteValidatorUpdate {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		nome: schema.string({ trim: true }),
		cpfcnpj: schema.string({ trim: true }, [rules.minLength(14), rules.maxLength(18)]),
		endereco: schema.string({ trim: true }),
		bairro: schema.string({ trim: true }),
		numero: schema.string({ trim: true }),
		cidade: schema.string({ trim: true }),
		uf: schema.string({ trim: true }),
		cep: schema.string({ trim: true }),
		telefone: schema.string({ trim: true }, [rules.maxLength(15)]),
		email: schema.string({ trim: true }, [rules.email()]),
		iepr: schema.string({ trim: true }),
		observacao: schema.string.optional({ trim: true }),
		rgie: schema.string({ trim: true }),
		status: schema.string.optional({ trim: true }),
		codibge: schema.string({ trim: true })

	})

	public messages = {}
}

export default { ClienteValidatorStore, ClienteValidatorUpdate }