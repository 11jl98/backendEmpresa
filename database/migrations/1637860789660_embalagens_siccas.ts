import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EmbalagensSiccas extends BaseSchema {
  protected tableName = 'embalagens_siccas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_cod_sicca').primary()
      table.decimal('codsicca', 20)
      table.string('unidadeembalagem', 20)
      table.decimal('capacidadeembalagem', 20)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
