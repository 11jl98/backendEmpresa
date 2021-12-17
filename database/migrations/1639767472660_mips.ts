import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class Mips extends BaseSchema {
  protected tableName = 'mips'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_mip').primary()
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
