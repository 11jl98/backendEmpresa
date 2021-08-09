import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AgroLote from 'App/Models/LoteAgrotoxico'
import AgroLoteValidator from 'App/Validators/LoteAgrotoxicoValidator'
import {v4 as uuid} from 'uuid'

export default class LoteAgrotoxicosController {
  public async index ({}: HttpContextContract) {
    const agroLote = await AgroLote.all()
    return agroLote
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const data = await request.validate(AgroLoteValidator)
    const agroLote = await AgroLote.create({
      idEmpresa: id,
      ...data,
      id: uuid()
    })
    return agroLote
  }

  public async show ({params}: HttpContextContract) {
    const agroLote = await AgroLote.findOrFail(params.id)
    return agroLote
    
  }

  public async update ({request, params}: HttpContextContract) {
    const agroLote = await AgroLote.findOrFail(params.id)
    const data = await request.validate(AgroLoteValidator)
    agroLote.merge(data)
    await agroLote.save()
    return agroLote
  }

  public async destroy ({params}: HttpContextContract) {
    const agroLote = await AgroLote.findOrFail(params.id)
    await agroLote.delete()
  }
}
