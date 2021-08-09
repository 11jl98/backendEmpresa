import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Infortecnica from 'App/Models/Infortecnica'
import InfortecnicaValidator from 'App/Validators/InfortecnicaValidator'
import {v4 as uuid} from 'uuid'

export default class InfortecnicaReceitasController {
  public async index ({}: HttpContextContract) {
    const info = Infortecnica.all()
    return info
  }

  public async store ({request, auth}: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const data = await request.validate(InfortecnicaValidator)
    const info = await Infortecnica.create({
      ...data,
      idEmpresa: id,
      idInfortecnica: uuid()
    })
    await info.preload('receita')
    return info
  }

  public async show ({params}: HttpContextContract) {

    const info = await Infortecnica.findOrFail(params.id)
    return info
  }

  public async update ({request, params}: HttpContextContract) {
    console.log('cheguemos no put',params.id)
    const info = await Infortecnica.findOrFail(params.id)
    console.log('taaquiiiii', info)
    const data = await request.validate(InfortecnicaValidator)

    info.merge(data)
    await info.save()
    return info
  }

  public async destroy ({params}: HttpContextContract) {
    const info = await Infortecnica.findOrFail(params.id)
    info.delete()
  }
}
