import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Lote from 'App/Models/Lote'
import LoteValidator from 'App/Validators/LoteValidator'
import {v4 as uuid} from 'uuid'

export default class LotesController {
  public async index ({}: HttpContextContract) {
    const lote = await Lote.all()
    return lote
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const data = await request.validate(LoteValidator.LoteValidatorStore)
    const lote = await Lote.create({
       idEmpresa: id,
        ...data,
        idLote: uuid()
      })
    return lote
  }

  public async show ({params}: HttpContextContract) {
    const lote = Lote.findOrFail(params.id)
    return lote
  }

  public async update ({request, params}: HttpContextContract) {
    const lote = await Lote.findOrFail(params.id)
    const data = await request.validate(LoteValidator.LoteValidatorUpdate)

    lote.merge(data)
    await lote.save()
    return lote

  }

  public async destroy ({params}: HttpContextContract) {
    const lote = await Lote.findOrFail(params.id)
    await lote.delete()
  }
}
