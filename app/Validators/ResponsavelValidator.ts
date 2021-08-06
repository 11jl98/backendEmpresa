import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class ResponsavelValidatorStore {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	nome:schema. string({trim: true}),
	cpf:schema.string({trim: true}, [rules.minLength(11), rules.maxLength(25), rules.unique({table:'responsavel_tecnicos', column: 'cpf'})]),
	crea: schema.string.optional({trim: true}),
	endereco: schema.string.optional({trim: true}),
	bairro: schema.string.optional({trim: true}),
	numero: schema.string.optional({trim: true}),
	cidade: schema.string.optional({trim: true}),
	UF: schema.string.optional({trim: true}),
	cep: schema.string.optional({trim: true}),
	telefone: schema.string.optional({trim: true}),
	email: schema.string.optional({trim: true}),
	receitasart: schema.string.optional({trim: true},[rules.unique({table:'responsavel_tecnicos', column: 'cpf'})]),
	proximareceita: schema.string.optional({trim: true}),
	artatual: schema.string.optional({trim: true}),
	observacao: schema.string.optional({trim: true}),
	profissao: schema.string.optional({trim: true}),
	tokensc: schema.string.optional({trim: true}),
	complementoreceita: schema.string.optional({trim: true}),
	seriesc: schema.string.optional({trim: true}),
	conselho: schema.string.optional({trim: true}),
	contrato: schema.string.optional({trim: true})
  })


  public messages = {}
}
class ResponsavelValidatorUpdate {
	constructor (protected ctx: HttpContextContract) {
	}
  
	public schema = schema.create({
	  nome:schema. string({trim: true}),
	  cpf:schema.string({trim: true}, [rules.minLength(11), rules.maxLength(25)]),
	  crea: schema.string.optional({trim: true}),
	  endereco: schema.string.optional({trim: true}),
	  bairro: schema.string.optional({trim: true}),
	  numero: schema.string.optional({trim: true}),
	  cidade: schema.string.optional({trim: true}),
	  UF: schema.string.optional({trim: true}),
	  cep: schema.string.optional({trim: true}),
	  telefone: schema.string.optional({trim: true}),
	  email: schema.string.optional({trim: true}),
	  receitasart: schema.string.optional({trim: true}),
	  proximareceita: schema.string.optional({trim: true}),
	  artatual: schema.string.optional({trim: true}),
	  observacao: schema.string.optional({trim: true}),
	  profissao: schema.string.optional({trim: true}),
	  tokensc: schema.string.optional({trim: true}),
	  complementoreceita: schema.string.optional({trim: true}),
	  seriesc: schema.string.optional({trim: true}),
	  conselho: schema.string.optional({trim: true}),
	  contrato: schema.string.optional({trim: true})
	})
  
  
	public messages = {}
  }
export default {ResponsavelValidatorStore, ResponsavelValidatorUpdate}