import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Propriedades extends BaseSchema {
  protected tableName = 'propriedades'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id_propriedade').primary()
      table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE')
      table.uuid('id_cliente').references('id_cliente').inTable('clientes').onUpdate('CASCADE')
      table.string('nomepropriedade',255)
      table.string('endereco',255)
      table.string('bairro',50)
      table.string('numero',20)
      table.string('cidade',150)
      table.string('UF',5)
      table.string('cep',10)
      table.string('latitude',100)
      table.string('longitude',100)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
