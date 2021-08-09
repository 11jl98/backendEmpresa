import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Lotes extends BaseSchema {
  protected tableName = 'lotes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id_lote').primary()
      table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE')
      table.string('numlote')
      table.text('observacao','longtext')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
