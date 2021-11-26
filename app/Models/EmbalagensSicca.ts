import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EmbalagensSicca extends BaseModel {
  @column({ isPrimary: true })
  public id_cod_sicca: number

  @column()
  public codsicca: number

  @column()
  public unidadeembalagem: string

  @column()
  public capacidadeembalagem: number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
