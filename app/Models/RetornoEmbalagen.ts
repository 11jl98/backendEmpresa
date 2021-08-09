import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Cliente from 'App/Models/Cliente'

export default class RetornoEmbalagen extends BaseModel {
  @column({ isPrimary: true })
  public idRetornoembal: string

  @column()
  public idEmpresa: string
  @belongsTo(() => User, {foreignKey:'idEmpresa'})
  public user: BelongsTo<typeof User>

  @column()
  public idCliente: string
  @belongsTo(() => Cliente, {foreignKey:'idCliente'})
  public cliente: BelongsTo<typeof Cliente>
  
  @column()
  public data: Date

  @column()
  public embdevolvidas: number

   @column()
  public nomecliente: string

  @column()
  public nomeembalagem: string

  @column()
  public nomeagrotoxico: string

  @column()
  public nomeagrregistroagrotoxicootoxico: string

  @column()
  public numeronf: number

  @column()
  public numeroreceita: string

  @column()
  public quantidadesaida: number

  @column()
  public observacao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

