import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RetornoEmbalagens extends BaseSchema {
  protected tableName = 'retorno_embalagens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_retornoembal')
      table.integer('id_empresa').unsigned().references('id').inTable('users').onUpdate('CASCADE')
      table.integer('id_cliente').unsigned().references('id_cliente').inTable('clientes').onUpdate('CASCADE')
      table.date('data')
      table.integer('embdevolvidas')
      table.string('nomecliente')
      table.string('nomeembalagem')
      table.string('nomeagrotoxico')
      table.string('registroagrotoxico')
      table.integer('numeronf')
      table.string('numeroreceita')
      table.integer('quantidadesaida')
      table.text('observacao','longtext')

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
