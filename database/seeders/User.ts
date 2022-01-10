import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import { v4 as uuid } from 'uuid'
export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        login:'12345678912',
        password:'secret',
				rule: 'admin',

        id:uuid()
      },
      {
        login:'00123456789',
        password:'secret',
				rule: 'admin',

        id:uuid()
      },
      {
        login:'98765432198',
        password:'secret',
				rule: 'admin',

        id:uuid()
      },
    ])
  }
}
