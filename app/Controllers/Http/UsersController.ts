import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import {v4 as uuid} from 'uuid'

export default class UsersController {
  public async store ({ request }: HttpContextContract) {
    const data = request.body()
    console.log('finalmente ta aqui', data)
    const user = await User.create({login: data.login, password: data.password ,rule: data.rule, id: uuid()})
    return user
  }

  public async show ({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    return user
  }

  public async destroy ({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    user.delete()
  }
}
