import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Responsavel from 'App/Models/ResponsavelTecnico'
import ResponsavelValidator from 'App/Validators/ResponsavelValidator'

export default class ResponsavelTecnicosController {
  public async index ({ }: HttpContextContract) {
    const responsavel = await Responsavel.all()
    return responsavel
  }

  public async store ({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const id = user.id

    const data = await request.validate(ResponsavelValidator)
    const responsavel = await Responsavel.create({
      ...data,
      idEmpresa: id,
    })
    return responsavel
  }

  public async show ({ params }: HttpContextContract) {
    const responsavel = await Responsavel.findOrFail(params.id)
    return responsavel
  }

  public async update ({ params, request }: HttpContextContract) {
    const responsavel = await Responsavel.findOrFail(params.id)
    const data = await request.validate(ResponsavelValidator)

    responsavel.merge(data)
    await responsavel.save()
    return responsavel
  }

  public async destroy ({ params }: HttpContextContract) {
    const responsavel = await Responsavel.findOrFail(params.id)
    responsavel.delete()
  }
}
