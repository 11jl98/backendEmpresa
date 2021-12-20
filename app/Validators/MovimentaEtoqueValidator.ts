import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MovimentaEtoqueValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	 id_fornecedor:schema.string.optional(),
	 id_infortecnica:schema.string.optional(),
	 embalagemindea:schema.string.optional({trim: true}),
	 enviado:schema.string.optional({trim: true}),
	 nomeagrotoxico:schema.string.optional({trim: true}),
	 id_agrotoxico:schema.number(),
	 nomeembalagem:schema.string({trim: true}),
	 tipoembalagem:schema.number.optional(),
	 unidademmbalagem:schema.string.optional({trim: true}),
	 id_embalagem:schema.number.optional(),
	 nomeresponsaveltecnico:schema.string({trim: true}),
	 tipomovimentacao:schema.string({trim: true}),
	 json:schema.string.optional({trim: true}),
	 notafiscal:schema.string({trim: true}),
	 numlote:schema.string.optional({trim: true}),
	 observacao:schema.string.optional({trim: true}),
	 quantidade:schema.number(),
	 receita:schema.string.optional({trim: true}),
	 registroagrotox:schema.string({trim: true}),
	 serie:schema.string({trim: true}), 
	 statussc:schema.string.optional({trim: true}),
	 datanfe: schema.string({ trim: true}),
  })

  public messages = {
	'id_agrotoxico.required':'Selecione um agrotóxico para prosseguir',
	'nomeembalagem.required':'Selecione uma embalagem para prosseguir',
	'nomeresponsaveltecnico.required':'Selecione um responsável tecnico para prosseguir',
	'tipomovimentacao.required':'Selecione um tipo de movimentação para prosseguir',
	'notafiscal.required':'É necessário inserir a numeração da nota fiscal',
	'serie.required':'É necessário inserir a serie da nota fiscal',
	'quantidade.required':'Informe a quantidade para prosseguir',
	'datanfe.required':'Informe a data de emissão da nota fiscal para prosseguir',
  }
}
