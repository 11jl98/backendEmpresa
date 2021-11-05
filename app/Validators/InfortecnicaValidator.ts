import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class InfortecnicaValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	id_receita: schema.string(),
	aplicacao: schema.string.optional({trim: true}),
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
	id_agrotoxico: schema.number(),
	id_cultura: schema.number(),
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
	volumecalda: schema.string({trim: true}),
	volumecaldabula: schema.string({trim: true}),
	dosagembula: schema.string({trim: true}),
	solo: schema.string({trim: true}),
  })

	
  public messages = {
	'id_receita.required': 'Selecione uma receita para adicionar um produto',
	'areatratar.required': 'Área a tratar deve ser preenchido',
	'classetoxico.required': '',
	'classificacaocultura.required': '',
	'codcultura.required': '',
	'concentracao.required': '',
	'dosagem.required': '',
	'epi.required': '',
	'epocaaplicacao.required': '',
	'estagiocultura.required': '',
	'fitoxidade.required': '',
	'formulacao.required': '',
	'horario.required': '',
	'nomeembalagem.required': '',
	'tipoembalagem.required': '',
	'unidademmbalagem.required': '',
	'indicacao.required': '',
	'ingredienteativo.required': '',
	'intervaloaplicacao.required': '',
	'intervaloentrada.required': '',
	'intervaloseguranca.required': '',
	'lote.required': '',
	'id_agrotoxico.required': '',
	'id_cultura.required': '',
	'modaplicacao.required': '',
	'modoaplicacao.required': '',
	'nomeagrotoxico.required': '',
	'nomecultura.required': '',
	'nomeclasse.required': '',
	'nomeclasseambiental.required': '',
	'nomegrupoquimico.required': '',
	'numeroaplicacoes.required': '',
	'problemacientifico.required': '',
	'problemacomum.required': '',
	'quantembal.required': '',
	'quantidadeadquirir.required': '',
	'registroagrotoxico.required': '',
	'tipoaplicacao.required': '',
	'volumecalda.required': '',
	'volumecaldabula.required': '',
	'dosagembula.required': '',
	'solo.required': '',
  }
}
