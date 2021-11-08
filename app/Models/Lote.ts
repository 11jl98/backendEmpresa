import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Lote extends BaseModel {
  @column({ isPrimary: true })
  public idLote: string
  @column()
  public idEmpresa: string
  @belongsTo(() => User, {foreignKey:'idEmpresa'})
  public user: BelongsTo<typeof User>

  @column()
  public id_agrotoxico: Number

  @column()
  public nomeagrotoxico: string

  @column()
  public embalagem: string

  @column()
  public unidadeembalagem: string

  @column()
  public capacidadeembalagem: string

  @column()
  public numlote: string

  @column()
  public datavencimento: string

  @column()
  public observacao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
