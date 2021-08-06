import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Propriedade from 'App/Models/Propriedade'
import PropriedadeValidator from 'App/Validators/PropriedadeValidator'

export default class PropriedadesController {
  public async index ({}: HttpContextContract) {
    const propriedade = await Propriedade.all()
    return propriedade
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const data = await request.validate(PropriedadeValidator.PropriedadeValidatorStore)
      console.log(data)
    const propriedade = await Propriedade.create({
      ...data,
      idEmpresa: id,
    })
    await propriedade.preload('cliente')
    return propriedade
  }

  public async show ({ params }: HttpContextContract) {
    const propriedade = await Propriedade.findOrFail(params.id)
    await propriedade.preload('cliente')
    return propriedade
  }

  public async update ({ request, params }: HttpContextContract) {
    const propriedade = await Propriedade.findOrFail(params.id)
    const data = await request.validate(PropriedadeValidator.PropriedadeValidatorUpdate)

    propriedade.merge(data)
    await propriedade.save()
    await propriedade.preload('cliente')
    return propriedade
  }

  public async destroy ({params}: HttpContextContract) {
    const propriedade = await Propriedade.findOrFail(params.id)
    await propriedade.delete()
  }
}
