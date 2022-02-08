import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PropriedadeRepo from 'App/Repositories/PropriedadeRepo'
import Propriedade from 'App/Models/Propriedade'
import PropriedadeValidator from 'App/Validators/PropriedadeValidator'
import {v4 as uuid} from 'uuid'

export default class PropriedadesController {
  public async index ({ params, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const propriedade = await PropriedadeRepo.indexInit(params.id, id)
    return propriedade
  }
  public async indexInit ({ params, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const propriedade = await PropriedadeRepo.indexInit(params.id, id)

    return propriedade
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const Uuid = uuid()
    const id = user.id
    const data = await request.validate(PropriedadeValidator.PropriedadeValidatorStore)
    const propriedade = await Propriedade.create({
      ...data,
      idEmpresa: id,
      idPropriedade: Uuid
    })
    propriedade.idPropriedade = Uuid
    return propriedade
  }

  public async show ({ params, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id
    const propriedade = await PropriedadeRepo.show(params.id, id)
    return propriedade
  }


  public async update ({ request, params }: HttpContextContract) {
    const propriedade = await Propriedade.findOrFail(params.id)
    const data = await request.validate(PropriedadeValidator.PropriedadeValidatorUpdate)
    console.log(data)

    propriedade.merge(data)
    await propriedade.save()
    return propriedade
  }

  public async destroy ({params}: HttpContextContract) {
    const propriedade = await Propriedade.findOrFail(params.id)
    await propriedade.delete()
  }
}
