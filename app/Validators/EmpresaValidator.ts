import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class EmpresaValidatorStore {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	nomeempresa: schema.string({trim: true}),
	nomefantasia: schema.string({trim: true}),
	cpfcnpj:schema.string({trim: true},[rules.minLength(11), rules.maxLength(25), rules.unique({table:'empresas', column: 'cpfcnpj'})]),
	endereco:schema.string({trim: true}),
	bairro:schema.string({trim: true}),
	numero: schema.string({trim: true}),
	cidade: schema.string({trim: true}),
	UF:schema.string({trim: true}),
	cep: schema.string({trim: true}),
	telefone:schema.string({trim: true}, [rules.maxLength(11)]),
	email:schema.string({trim: true}, [rules.email()]),
	ie: schema.string({trim: true}),
  })

  public messages = {}
}

class EmpresaValidatorUpdate {
	constructor (protected ctx: HttpContextContract) {
	}
  
	public schema = schema.create({
	  nomeempresa: schema.string({trim: true}),
	  nomefantasia: schema.string({trim: true}),
	  cpfcnpj:schema.string({trim: true},[rules.minLength(11), rules.maxLength(25)]),
	  endereco:schema.string({trim: true}),
	  bairro:schema.string({trim: true}),
	  numero: schema.string({trim: true}),
	  cidade: schema.string({trim: true}),
	  UF:schema.string({trim: true}),
	  cep: schema.string({trim: true}),
	  telefone:schema.string({trim: true}, [rules.maxLength(11)]),
	  email:schema.string({trim: true}, [rules.email()]),
	  ie: schema.string({trim: true}),
	})
  
	public messages = {}
  }

  export default {EmpresaValidatorStore, EmpresaValidatorUpdate}
