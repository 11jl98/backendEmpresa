import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clientes extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id_cliente').primary()
      table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE')
      table.string('nome',255)
      table.string('cpfcnpj',20)
      table.string('endereco',255)
      table.string('bairro',50)
      table.string('numero',20)
      table.string('cidade',150)
      table.string('UF',5)
      table.string('cep',10)
      table.string('telefone',15)
      table.string('email',100)
      table.string('iepr',20)
      table.string('tipopessoa',1)
      table.string('observacao',1000)
      table.string('rgie',20)
      table.string('status',20)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
