import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Mensagens extends BaseSchema {
  protected tableName = 'mensagems'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id_mensagem').primary()
      table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE')
      table.string('titulo', 50)
      table.text('observacao', 'longtext')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
