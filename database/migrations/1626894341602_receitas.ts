/* eslint-disable max-len */
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Receitas extends BaseSchema {
  protected tableName = 'receitas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_receita')
      table.integer('id_empresa').unsigned().references('id').inTable('users').onUpdate('CASCADE')
      table.integer('id_cliente').unsigned().references('id_cliente').inTable('clientes').onUpdate('CASCADE')
      table.integer('id_propriedade').unsigned().references('id_propriedade').inTable('propriedades').onUpdate('CASCADE')
      table.integer('id_responsavel').unsigned().references('id_responsavel').inTable('responsavel_tecnicos').onUpdate('CASCADE')
      table.string('numeroreceita',255)
      table.string('numeroart',255)
      table.string('data')
      table.string('nome')
      table.string('statusreceita')
      table.string('observacao', 2000)
      table.string('obsmip', 2000)
      table.string('notafiscal')
      table.string('serie')
      table.string('valor')
      table.string('datafinal')
      table.string('statussc')
      table.string('jsonsc', 7000)
      table.string('codretsc')
      table.string('enviado')
      table.string('devolucao')
      table.string('cogoias')
      table.string('seriesc')
      table.string('complementoreceita')
      table.string('chavenfe')
      table.string('datanfe')
      table.string('protocolors')
      table.string('protocolocancelamentors')
      table.string('contrato')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
