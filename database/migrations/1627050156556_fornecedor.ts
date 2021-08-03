import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Fornecedor extends BaseSchema {
  protected tableName = 'fornecedors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_fornecedor')
      table.integer('id_empresa').unsigned().references('id').inTable('users').onUpdate('CASCADE')
      table.string('nome',255)
      table.string('nomefantasia',255)
      table.string('cpfcnpj',20)
      table.string('endereco',255)
      table.string('bairro',50)
      table.string('numero',20)
      table.string('cidade',150)
      table.string('UF',5)
      table.string('cep',10)
      table.string('telefone',15)
      table.string('email',100)
      table.string('ie',20)
      table.text('observacao','longtext')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
