import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class InfortecnicaReceitas extends BaseSchema {
  protected tableName = 'infortecnica_receitas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_infortecnica')
      table.integer('id_empresa').unsigned().references('id').inTable('users').onUpdate('CASCADE')
      table.integer('id_receita').unsigned().references('id_receita').inTable('receitas').onUpdate('CASCADE')
      table.text('aplicacao','longtext')
      table.string('areatratar',20)
      table.string('classetoxico',100)
      table.string('classificacaocultura',20)
      table.string('codcultura',20)
      table.string('concentracao',255)
      table.string('dosagem',255)
      table.string('epi',500)
      table.string('epocaaplicacao',50)
      table.string('estagiocultura',500)
      table.string('fitoxidade')
      table.string('formulacao',50)
      table.string('horario',255)
      table.string('nomeembalagem',255)
      table.string('tipoembalagem',255)
      table.string('unidademmbalagem',255)
      table.string('indicacao',255)
      table.string('ingredienteativo',255)
      table.string('intervaloaplicacao',255)
      table.string('intervaloentrada',255)
      table.string('intervaloseguranca',255)
      table.string('lote',255)
      table.string('modaplicacao',255)
      table.text('modoaplicacao','longext')
      table.string('nomeagrotoxico',255)
      table.string('nomecultura',255)
      table.string('nomeclasse',255)
      table.string('nomeclasseambiental',255)
      table.string('nomegrupoquimico',255)
      table.string('numeroaplicacoes',255)
      table.string('problemacientifico',255)
      table.string('problemacomum',255)
      table.string('quantembal',255)
      table.string('quantidadeadquirir',255)
      table.string('registroagrotoxico',255)
      table.string('tipoaplicacao',255)
      table.string('volumecalda',255)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
