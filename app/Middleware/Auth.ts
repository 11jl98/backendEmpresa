import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'

export default class AuthMiddleware {
  
  protected redirectTo = '/login'

  protected async authenticate (auth: HttpContextContract['auth'], guards: any[]) {
  
    let guardLastAttempted: string | undefined

    for (let guard of guards) {
      guardLastAttempted = guard

      if (await auth.use(guard).check()) {
        /**
         * Instruct auth to use the given guard as the default guard for
         * the rest of the request, since the user authenticated
         * succeeded here
         */
        auth.defaultGuard = guard
        return true
      }
    }

    /**
     * Unable to authenticate using any guard
     */
    throw new AuthenticationException(
      'Unauthorized access',
      'E_UNAUTHORIZED_ACCESS',
      guardLastAttempted,
      this.redirectTo,
    )
  }

  public async handle ({ auth }: HttpContextContract, next: () => Promise<void>, customGuards: string[]) {
  
    const guards = customGuards.length ? customGuards : [auth.name]
    await this.authenticate(auth, guards)
    await next()
  }
}
