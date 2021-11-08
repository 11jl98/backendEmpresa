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

  public messages = {
	  'nomeempresa.required':'Razão social não pode ficar em branco',
	  'nomefantasia.required':'Nome empresa não pode ficar em branco',
	  'cpfcnpj.required':'CPF/CNPJ não pode ficar em branco, e deve conter 11 ou 14 caracteres',
	  'endereco.required':'Endereço não pode ficar em branco',
	  'bairro.required':'Bairro não pode ficar em branco',
	  'numero.required':'Número não pode ficar em branco',
	  'cidade.required':'Cidade não pode ficar em branco',
	  'UF.required':'UF não pode ficar em branco',
	  'cep.required':'CEP não pode ficar em branco',
	  'telefone.required':'Número de telefone não valido digite o DDD digito 9  e os demais digitos',
	  'email.required':'Email precisa ser um email válido',
	  'ie.required':'Inscrição estadual não pode ficar em branco',
  }
}

class EmpresaValidatorUpdate {
	constructor (protected ctx: HttpContextContract) {
	}
  
	public schema = schema.create({
	  nomeempresa: schema.string({trim: true}),
	  nomefantasia: schema.string({trim: true}),
	  cpfcnpj:schema.string({trim: true}),
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
  
	public messages = {
		'nomeempresa.required':'Razão social não pode ficar em branco',
		'nomefantasia.required':'Nome empresa não pode ficar em branco',
		'cpfcnpj.required':'CPF/CNPJ não pode ficar em branco, e deve conter 11 ou 14 caracteres',
		'endereco.required':'Endereço não pode ficar em branco',
		'bairro.required':'Bairro não pode ficar em branco',
		'numero.required':'Número não pode ficar em branco',
		'cidade.required':'Cidade não pode ficar em branco',
		'UF.required':'UF não pode ficar em branco',
		'cep.required':'CEP não pode ficar em branco',
		'telefone.required':'Número de telefone não valido digite o DDD digito 9  e os demais digitos',
		'email.required':'Email precisa ser um email válido',
		'ie.required':'Inscrição estadual não pode ficar em branco',
	}
  }

  export default {EmpresaValidatorStore, EmpresaValidatorUpdate}
