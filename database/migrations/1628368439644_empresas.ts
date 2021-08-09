import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Empresas extends BaseSchema {
  protected tableName = 'empresas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id_cadastro').primary()
      table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE')
      table.string('nomeempresa')
      table.string('nomefantasia')
      table.string('cpfcnpj',20)
      table.string('endereco',255)
      table.string('bairro',50)
      table.string('numero',20)
      table.string('cidade',150)
      table.string('UF',5)
      table.string('cep',10)
      table.string('telefone',15)
      table.string('telefone2',15)
      table.string('email',100)
      table.string('ie',20)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
