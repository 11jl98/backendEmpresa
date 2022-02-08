import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class FornecedorValidatorStore {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		nome: schema.string({ trim: true }),
		nomefantasia: schema.string({ trim: true }),
		cpfcnpj: schema.string({ trim: true }, [rules.minLength(14), rules.maxLength(18), rules.unique({ table: 'fornecedors', column: 'cpfcnpj' })]),
		endereco: schema.string.optional({ trim: true }),
		bairro: schema.string.optional({ trim: true }),
		numero: schema.string.optional({ trim: true }),
		cidade: schema.string.optional({ trim: true }),
		uf: schema.string.optional({ trim: true }),
		cep: schema.string.optional({ trim: true }),
		telefone: schema.string.optional({ trim: true }, [rules.maxLength(15)]),
		email: schema.string.optional({ trim: true }, [rules.email()]),
		ie: schema.string({ trim: true }),
		observacao: schema.string.optional({ trim: true }),
		codibge: schema.string({ trim: true })

	})

	public messages = {}
}
class FornecedorValidatorUpdate {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		nome: schema.string({ trim: true }),
		nomefantasia: schema.string({ trim: true }),
		cpfcnpj: schema.string({ trim: true }, [rules.minLength(14), rules.maxLength(18),]),
		endereco: schema.string.optional({ trim: true }),
		bairro: schema.string.optional({ trim: true }),
		numero: schema.string.optional({ trim: true }),
		cidade: schema.string.optional({ trim: true }),
		uf: schema.string.optional({ trim: true }),
		cep: schema.string.optional({ trim: true }),
		telefone: schema.string.optional({ trim: true }, [rules.maxLength(15)]),
		email: schema.string.optional({ trim: true }, [rules.email()]),
		ie: schema.string({ trim: true }),
		observacao: schema.string.optional({ trim: true }),
		codibge: schema.string({ trim: true })

	})

	public messages = {}
}


export default { FornecedorValidatorStore, FornecedorValidatorUpdate }