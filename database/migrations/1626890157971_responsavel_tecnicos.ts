import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ResponsavelTecnicos extends BaseSchema {
  protected tableName = 'responsavel_tecnicos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id_responsavel').primary()
      table.uuid('id_empresa').references('id').inTable('users').onUpdate('CASCADE')
      table.string('nome',255)
      table.string('cpf',20)
      table.string('crea',20)
      table.string('endereco',20)
      table.string('bairro',50)
      table.string('numero',20)
      table.string('cidade',150)
      table.string('UF',5)
      table.string('cep',10)
      table.string('telefone',15)
      table.string('email',100)
      table.string('receitasart',100)
      table.string('quantidadereceita',100)
      table.string('proximareceita',100)
      table.string('artatual',100)
      table.string('observacao',1000)
      table.string('profissao',100)
      table.string('tokensc',50)
      table.string('complementoreceita',50)
      table.string('seriesc',50)
      table.string('conselho',50)
      table.string('contrato',50)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
