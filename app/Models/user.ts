import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import avatar from 'App/Models/AvatarLogo'

import {
  column,
  beforeSave,
  BaseModel,
  hasOne,
  HasOne
} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public login: string

  @column()
  public password: string
  
  @column()
  public rule: 'normal' | 'admin'

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
  @hasOne(()=>avatar,{
    foreignKey:'idEmpresa'
  })
  public avatar: HasOne<typeof avatar>
}
