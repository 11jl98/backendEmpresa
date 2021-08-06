import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async store ({ request, auth }: HttpContextContract) {
    const data = request.body()
    console.log(data, 'chegou')

    const json = JSON.parse(data as unknown as string)
    console.log('ta aqui',json.login, json.password)
    const token = auth.attempt(json.login, json.password, {
      expiresIn:'1 days',
    })
    return token
  }
  public async destroy ({ auth }: HttpContextContract) {
    auth.logout()
  }
}
