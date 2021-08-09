import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LoteAgrotoxicos extends BaseSchema {
  protected tableName = 'lote_agrotoxicos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id_Agrotoxolote').primary()
      table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE')
      table.uuid('id_lote').references('id_lote').inTable('lotes').onUpdate('CASCADE')
      table.integer('id_agrotoxico')
      table.string('nomeagrotoxico')
      table.string('numlote')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}