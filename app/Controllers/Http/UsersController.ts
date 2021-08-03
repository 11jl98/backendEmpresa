import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async store ({ request }: HttpContextContract) {
    const data = request.only(['login','password'])
    const user = await User.create(data)
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
