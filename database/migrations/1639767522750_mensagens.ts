import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Mensagens extends BaseSchema {
  protected tableName = 'mensagens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_mensagem')
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
