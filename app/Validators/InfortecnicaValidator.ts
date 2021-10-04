import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class InfortecnicaValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	id_receita: schema.string.optional(),
	aplicacao: schema.string.optional({trim: true}),
	areatratar: schema.string.optional({trim: true}),
	classetoxico: schema.string.optional({trim: true}),
	classificacaocultura: schema.string.optional({trim: true}),
	codcultura: schema.string.optional({trim: true}),
	concentracao: schema.string.optional({trim: true}),
	dosagem: schema.string.optional({trim: true}),
	epi: schema.string.optional({trim: true}),
	epocaaplicacao: schema.string.optional({trim: true}),
	estagiocultura: schema.string.optional({trim: true}),
	fitoxidade: schema.string.optional({trim: true}),
	formulacao: schema.string.optional({trim: true}),
	horario: schema.string.optional({trim: true}),
	nomeembalagem: schema.string.optional({trim: true}),
	tipoembalagem: schema.string.optional({trim: true}),
	unidademmbalagem: schema.string.optional({trim: true}),
	indicacao: schema.string.optional({trim: true}),
	ingredienteativo: schema.string.optional({trim: true}),
	intervaloaplicacao: schema.string.optional({trim: true}),
	intervaloentrada: schema.string.optional({trim: true}),
	intervaloseguranca: schema.string.optional({trim: true}),
	lote: schema.string.optional({trim: true}),
	id_agrotoxico: schema.number(),
	id_cultura: schema.number(),
	modaplicacao: schema.string.optional({trim: true}),
	modoaplicacao: schema.string.optional({trim: true}),
	nomeagrotoxico: schema.string.optional({trim: true}),
	nomecultura: schema.string.optional({trim: true}),
	nomeclasse: schema.string.optional({trim: true}),
	nomeclasseambiental: schema.string.optional({trim: true}),
	nomegrupoquimico: schema.string.optional({trim: true}),
	numeroaplicacoes: schema.string.optional({trim: true}),
	problemacientifico: schema.string.optional({trim: true}),
	problemacomum: schema.string.optional({trim: true}),
	quantembal: schema.string.optional({trim: true}),
	quantidadeadquirir: schema.string.optional({trim: true}),
	registroagrotoxico: schema.string.optional({trim: true}),
	tipoaplicacao: schema.string.optional({trim: true}),
	volumecalda: schema.string.optional({trim: true})
  })

	
  public messages = {}
}
