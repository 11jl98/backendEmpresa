import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Fornecedor extends BaseModel {
  @column({ isPrimary: true })
  public idFornecedor: number

  @column()
  public idEmpresa: number
  @belongsTo(() => User, {foreignKey:'idEmpresa'})
  public user: BelongsTo<typeof User>

  @column()
  public nome: string

  @column()
  public nomefantasia: string

  @column()
  public cpfcnpj: string

  @column()
  public endereco: string

  @column()
  public bairro: string

  @column()
  public numero: string

  @column()
  public cidade: string

  @column()
  public UF: string

  @column()
  public cep: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public ie: string

  @column()
  public observacao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
