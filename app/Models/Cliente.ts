import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public idCliente: string

  @column()
  public idEmpresa: string
  @belongsTo(() => User, {foreignKey:'idEmpresa'})
  public user: BelongsTo<typeof User>

  @column()
  public nome: string

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
  public iepr: string

  @column()
  public observacao: string

  @column()
  public rgie: string

  @column()
  public status: string
  
  @column()
  public codibge: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
