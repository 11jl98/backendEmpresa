import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserslValidator'
export default class UsersController {
  public async store ({ request }: HttpContextContract) {
    const data = request.only(['login','password'])
    console.log('finalmente ta aqui')
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
