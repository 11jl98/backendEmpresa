import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class InfortecnicaValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	id_receita: schema.string({trim: true}),
	aplicacao: schema.string({trim: true}),
	areatratar: schema.string({trim: true}),
	classetoxico: schema.string({trim: true}),
	classificacaocultura: schema.string({trim: true}),
	codcultura: schema.string({trim: true}),
	concentracao: schema.string({trim: true}),
	dosagem: schema.string({trim: true}),
	epi: schema.string({trim: true}),
	epocaaplicacao: schema.string({trim: true}),
	estagiocultura: schema.string({trim: true}),
	fitoxidade: schema.string({trim: true}),
	formulacao: schema.string({trim: true}),
	horario: schema.string({trim: true}),
	nomeembalagem: schema.string({trim: true}),
	tipoembalagem: schema.string({trim: true}),
	unidademmbalagem: schema.string({trim: true}),
	indicacao: schema.string({trim: true}),
	ingredienteativo: schema.string({trim: true}),
	intervaloaplicacao: schema.string({trim: true}),
	intervaloentrada: schema.string({trim: true}),
	intervaloseguranca: schema.string({trim: true}),
	lote: schema.string({trim: true}),
	modaplicacao: schema.string({trim: true}),
	modoaplicacao: schema.string({trim: true}),
	nomeagrotoxico: schema.string({trim: true}),
	nomecultura: schema.string({trim: true}),
	nomeclasse: schema.string({trim: true}),
	nomeclasseambiental: schema.string({trim: true}),
	nomegrupoquimico: schema.string({trim: true}),
	numeroaplicacoes: schema.string({trim: true}),
	problemacientifico: schema.string({trim: true}),
	problemacomum: schema.string({trim: true}),
	quantembal: schema.string({trim: true}),
	quantidadeadquirir: schema.string({trim: true}),
	registroagrotoxico: schema.string({trim: true}),
	tipoaplicacao: schema.string({trim: true}),
	volumecalda: schema.string({trim: true})
  })

	
  public messages = {}
}
