import { schema, rules } from '@ioc:Adonis/Core/Validator'

class MensagemValidatorStore {


	public schema = schema.create({
		titulo: schema.string({ trim: true }, [rules.maxLength(50)]),
		observacao: schema.string({ trim: true }),
	})


	public messages = {}
}

class MensagemValidatorUpdate {


	public schema = schema.create({
		titulo: schema.string({ trim: true }, [rules.maxLength(50)]),
		observacao: schema.string({ trim: true }),
	})


	public messages = {}
}

export default { MensagemValidatorStore, MensagemValidatorUpdate }
