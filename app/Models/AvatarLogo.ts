import { BaseModel, column, belongsTo, BelongsTo, computed } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'
export default class AvatarLogo extends BaseModel {
  @column({ isPrimary: true })
  public idAvatar: string

  @column()
  public idEmpresa: string
  @belongsTo(() => User, {foreignKey:'idEmpresa'})
  public user: BelongsTo<typeof User>

  @column()
  public filename: string

  @computed()
  public get url(): string{
    return `${Env.get('APP_URL')}/uploads/${this.filename}`
  }

}
