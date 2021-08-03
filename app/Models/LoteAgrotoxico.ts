import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Lote from 'App/Models/Lote'
import User from 'App/Models/User'

export default class LoteAgrotoxico extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idEmpresa: number
  @belongsTo(() => User, {foreignKey:'idEmpresa'})
  public user: BelongsTo<typeof User>

  @column()
  public idLote: number
  @manyToMany(() => Lote, { pivotRelatedForeignKey: 'idLote'})
  public Lote: ManyToMany<typeof Lote>

  @column()
  public idAgrotoxico: number

  @column()
  public nomeagrotoxico: string 

  @column()
  public numote: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
