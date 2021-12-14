import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Configuracaos extends BaseSchema {
  protected tableName = 'configuracaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id_config').primary()
      table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE')
      table.string('modeloreceita').defaultTo('ModeloPadrao')
      table.enu('estoquenegativo', ['N', 'S']).defaultTo('N')
      table.decimal('quantidadeprodutoreceita', 15)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
