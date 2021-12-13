import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AvatarLogos extends BaseSchema {
  protected tableName = 'avatar_logos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_avatar').primary()
      table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE')
      table.string('filename').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
