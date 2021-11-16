import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle ({ response }: HttpContextContract, next: () => Promise<void>, 	allowRules: string[]) {

		if (allowRules[0].trim() !== 'admin') {
			return response.unauthorized({ error: { message: 'not authorized' } })
		}

		await next()
  }
}
