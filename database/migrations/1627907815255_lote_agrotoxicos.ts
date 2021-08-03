import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LoteAgrotoxicos extends BaseSchema {
  protected tableName = 'lote_agrotoxicos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_Agrotoxolote')
      table.integer('id_empresa').unsigned().references('id').inTable('users').onUpdate('CASCADE')
      table.integer('id_lote').unsigned().references('id_lote').inTable('lotes').onUpdate('CASCADE')
      table.integer('id_agrotoxico').unsigned()
      table.string('nomeagrotoxico')
      table.string('numlote')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}