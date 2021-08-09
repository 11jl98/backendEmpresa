import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import { v4 as uuid } from 'uuid'
export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        login:'09410796601',
        password:'secret',
        id:uuid()
      },
    ])
  }
}
