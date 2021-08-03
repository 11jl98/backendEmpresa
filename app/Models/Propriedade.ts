import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Cliente from 'App/Models/Cliente'

export default class Propriedade extends BaseModel {
  @column({ isPrimary: true })
  public idPropriedade: number

  @column()
  public idEmpresa: number
  @belongsTo(() => User, {foreignKey:'idEmpresa'})
  public user: BelongsTo<typeof User>

  @column()
  public idCliente: number
  @belongsTo(() => Cliente, {foreignKey:'idCliente'})
  public cliente: BelongsTo<typeof Cliente>

  @column()
  public nomepropriedade: string

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
  public cnpj: string

  @column()
  public email: string

  @column()
  public latitude: string

  @column()
  public longitude: string

  @column()
  public telefone: string

  @column()
  public iepr: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
